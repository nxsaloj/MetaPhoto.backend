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
} from "./types";
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

export const ParamsToFilter = (
  params: {
    [key: string]: string | undefined;
  } | null
): Filters => {
  const filters: Filters = {
    title: params?.["title"],
    album: params?.["album.title"],
    user: params?.["album.user.email"],
  };
  return filters;
};

export const MapParamsToPagination = (
  params: {
    [key: string]: string | undefined;
  } | null
): Pagination => {
  const pagination: Pagination = {
    limit: Number(params?.["limit"]) || 0,
    offset: Number(params?.["offset"]) || 0,
  };
  return pagination;
};

export const ToPaginatedItems = <T>(
  elements: T[],
  pagination: Pagination
): Paginated<T[]> => {
  let items = elements;
  const total = items.length;
  const pages = Math.ceil(total / pagination.limit);

  if (pagination.limit > 0) {
    items = items.slice(
      pagination.offset,
      pagination.offset + pagination.limit
    );
  }

  return {
    items: items,
    page: Math.ceil(pagination.offset / pagination.limit),
    pages,
    total,
  };
};
