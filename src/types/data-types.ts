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
