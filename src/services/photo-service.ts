import { get } from "./base-service";
import { PhotoApi } from "../types";

/***
 * @returns {PhotoApi}
 */
export const getAllPhotos = (): Promise<PhotoApi[]> => {
  return get<PhotoApi[]>("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response)
    .catch((error) => Promise.reject("Something went wrong"));
};

/**
 *
 * @param {Number} id
 * @returns {Promise<PhotoApi>}
 */
export const getPhotosById = (id: number): Promise<PhotoApi> => {
  return get<PhotoApi>(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((response) => response)
    .catch((error) => Promise.reject("Something went wrong"));
};
