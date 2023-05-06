import useData from "./useData";
import { Category } from "./useCategories";
import { Mechanic } from "./useMechanics";

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

const useGames = (
  selectedCategory?: Category | null,
  selectedMechanic?: Mechanic | null
) =>
  useData<Game>(
    "/search",
    {
      params: {
        categories: selectedCategory?.id,
        mechanics: selectedMechanic?.id,
      },
    },
    [selectedCategory?.id, selectedMechanic?.id]
  );

export default useGames;
