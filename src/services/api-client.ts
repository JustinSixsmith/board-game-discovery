import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: `https://api.boardgameatlas.com/api`,
  params: {},
});

export interface FetchResponse<T> {
  count: number;
  games: T[];
  mechanics?: T[];
  categories?: T[];
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<{ games: T[] }>(this.endpoint, config)
      .then((res) => res.data.games || res.data);
  };

  get = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(`${this.endpoint}`, config)
      .then((res) => res.data.games);
  };
}

export default APIClient;
