import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  games: T[];
  mechanics?: T[];
  categories?: T[];
}

export default axios.create({
  baseURL: `https://api.boardgameatlas.com/api`,
  params: {},
});

// const proxy = "https://cors-anywhere.herokuapp.com/";
