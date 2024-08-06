import { Photo, PhotoApi, AlbumApi, Album, UserApi, User } from "./types";
export const MapUserApiToUser = (data: UserApi): User => {
  return {
    id: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    phone: data.phone,
    website: data.website,
    address: data.address,
    company: data.company,
  };
};

export const MapAlbumApiToAlbum = (data: AlbumApi, user?: User): Album => {
  return {
    id: data.id,
    title: data.title,
    user,
  };
};

export const MapPhotoApiToPhoto = (data: PhotoApi, album?: Album): Photo => {
  return {
    id: data.id,
    title: data.title,
    url: data.url,
    thumbnailUrl: data.thumbnailUrl,
    album,
  };
};
