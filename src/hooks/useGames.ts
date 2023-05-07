import useData from "./useData";
import { Category } from "./useCategories";
import { Mechanic } from "./useMechanics";
import { GameQuery } from "../App";

export interface Game {
  id: string;
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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/search",
    {
      params: {
        categories: gameQuery.category?.id,
        mechanics: gameQuery.mechanic?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
