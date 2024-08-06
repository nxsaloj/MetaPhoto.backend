type Primivites = string | number | boolean | null;
type Payload = {
  [key: string]: Primivites | Payload | Primivites[] | Payload[];
};

/**
 *
 * @param {string} url
 * @param {Payload} payload
 * @returns {Promise<T>}
 */
export const get = async <T>(
  url: string,
  payload?: Payload | Payload[]
): Promise<T> => {
  const options = {
    method: "GET",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return (await response.json()) as T;
};
