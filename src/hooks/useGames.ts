import useData from "./useData";
import { Category } from "./useCategories";

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

const useGames = (selectedCategory?: Category | null) =>
  useData<Game>(
    "/search",
    {
      params: {
        categories: selectedCategory?.id,
      },
    },
    [selectedCategory?.id]
  );

export default useGames;
