import useData from "./useData";
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
  primary_designer: { name: string };
  primary_publisher: { name: string };
  official_url: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/search",
    {
      params: {
        categories: gameQuery.category?.id,
        mechanics: gameQuery.mechanic?.id,
        order_by: gameQuery.sortOrder,
        name: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
