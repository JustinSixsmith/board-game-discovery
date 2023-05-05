import { Category } from "./useCategories";
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

const useGames = (selectedCategory: Category | null) =>
  useData<Game>("/search", { params: { categories: selectedCategory?.id } }, [
    selectedCategory?.id,
  ]);

export default useGames;
