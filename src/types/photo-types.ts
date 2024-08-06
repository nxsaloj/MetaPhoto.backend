export type GeoData = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoData;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
};

export type Album = {
  id: number;
  title: string;
  user?: User;
};

export type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  album?: Album;
};
