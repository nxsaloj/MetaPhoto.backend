export type GeoDataApi = {
  lat: string;
  lng: string;
};

export type AddressApi = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoDataApi;
};

export type CompanyApi = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserApi = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: AddressApi;
  company: CompanyApi;
};

export type AlbumApi = {
  id: number;
  title: string;
  userId: number;
};

export type PhotoApi = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
};
