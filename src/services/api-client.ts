import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  games: T[];
  mechanics?: T[];
  categories?: T[];
}

const axiosInstance = axios.create({
  baseURL: `https://api.boardgameatlas.com/api`,
  params: {},
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(
        (res) => res.data?.categories || res.data?.mechanics || res.data?.games
      );
  };
}

export default APIClient;
