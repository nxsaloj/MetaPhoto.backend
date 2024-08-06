import {
  Photo,
  PhotoApi,
  AlbumApi,
  Album,
  UserApi,
  User,
  Filters,
  Pagination,
  Paginated,
} from "../types";
import {
  getAllPhotos as getAllApiPhotos,
  getPhotosById,
} from "../services/photo-service";
import { getAlbumsById, getAllAlbums } from "../services/album-service";
import { getAllUsers, getUsersById } from "../services/user-service";
import {
  MapAlbumApiToAlbum,
  MapPhotoApiToPhoto,
  MapUserApiToUser,
  ToPaginatedItems,
} from "../transformers";

/**
 *
 * @param {number} id
 * @returns {Promise<Photo>}
 */
export const getPhotoEnrichedById = async (id: number): Promise<Photo> => {
  const photo = await getPhotosById(id);
  const albumApi = await getAlbumsById(photo.albumId);
  const userApi = await getUsersById(albumApi.userId);
  const user = MapUserApiToUser(userApi);
  const album = MapAlbumApiToAlbum(albumApi);
  return MapPhotoApiToPhoto(photo, album);
};

/**
 *
 * @param {number} id
 * @returns {Promise<Photo>}
 */

const reducer = <T extends { id: number }>(items: T[]) => {
  items.reduce((acc: { [key: number]: T }, item: T) => {
    acc[item.id] = item;
    return acc;
  }, {});
};

export const getAllPhotos = async (): Promise<Photo[]> => {
  const users = await getAllUsers();
  const userMap = users.reduce<{ [key: number]: User }>((acc, user) => {
    acc[user.id] = MapUserApiToUser(user);
    return acc;
  }, {});

  const albums = await getAllAlbums();
  const albumMap = albums.reduce<{ [key: number]: Album }>(
    (acc, album: AlbumApi) => {
      const user = userMap[album.userId];
      acc[album.id] = MapAlbumApiToAlbum(album, user);
      return acc;
    },
    {}
  );

  const photos = await getAllApiPhotos();
  const photosWithAlbums = photos.map<Photo>((photo: PhotoApi) => {
    return MapPhotoApiToPhoto(photo, albumMap[photo.albumId]);
  });

  return photosWithAlbums;
};

export const getFilteredPhotos = async (
  pagination: Pagination,
  filters?: Filters
): Promise<Paginated<Photo[]>> => {
  let enrichedPhotos = await getAllPhotos();
  enrichedPhotos = enrichedPhotos.filter((photo) =>
    photoFilter(photo, filters)
  );
  return ToPaginatedItems<Photo>(enrichedPhotos, pagination);
};

const photoFilter = (photo: Photo, filters?: Filters) => {
  if (!filters) return true;

  let keep: Boolean = true;
  if (filters.title) {
    keep = photo.title.includes(filters.title);
  }
  if (filters.album) {
    keep &&= Boolean(photo.album?.title.includes(filters.album));
  }
  if (filters.user) {
    keep &&= Boolean(photo.album?.user?.email === filters.user);
  }
  return keep;
};
