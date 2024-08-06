import { get } from "./base-service";
import { AlbumApi } from "../types";

/***
 * @returns {AlbumApi}
 */
export const getAllAlbums = (): Promise<AlbumApi[]> => {
  return get<AlbumApi[]>("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response)
    .catch((error) => Promise.reject("Something went wrong"));
};

/**
 *
 * @param {Number} id
 * @returns {Promise<AlbumApi>}
 */
export const getAlbumsById = (id: number): Promise<AlbumApi> => {
  return get<AlbumApi>(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then((response) => response)
    .catch((error) => Promise.reject("Something went wrong"));
};
