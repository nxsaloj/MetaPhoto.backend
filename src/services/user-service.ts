import { get } from "./base-service";
import { UserApi } from "../types";

/***
 * @returns {UserApi}
 */
export const getAllUsers = (): Promise<UserApi[]> => {
  return get<UserApi[]>("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response;
    })
    .catch((error) => Promise.reject("Something went wrong"));
};

/**
 *
 * @param {Number} id
 * @returns {Promise<UserApi>}
 */
export const getUsersById = (id: number): Promise<UserApi> => {
  return get<UserApi>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response)
    .catch((error) => Promise.reject("Something went wrong"));
};
