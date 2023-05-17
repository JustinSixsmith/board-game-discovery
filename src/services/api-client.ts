import axios, { AxiosRequestConfig } from "axios";

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
      .get<{ games: T[] }>(this.endpoint, config)
      .then((res) => res.data.games);
  };
}

export default APIClient;
