export type Filters = {
  title: string | undefined;
  album: string | undefined;
  user: string | undefined;
};

export type Pagination = {
  limit: number;
  offset: number;
};

export type Paginated<T> = {
  items: T;
  page: number;
  total: number;
  pages: number;
};
