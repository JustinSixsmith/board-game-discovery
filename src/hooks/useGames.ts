import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  images: {
    medium: string;
  };
  year_published: number;
  min_age: number;
  players: number;
  playtime: number;
  average_strategy_complexity: number;
  average_user_rating: number;
  description: string;
}

const useGames = () => useData<Game>("/search");

export default useGames;
