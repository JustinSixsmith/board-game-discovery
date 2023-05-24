import { Category } from "./Category";

export interface Game {
  id: string;
  name: string;
  description: string;
  categories: Category[];
  images: {
    medium: string;
  };
  primary_designer: {
    name: string;
  };
  average_user_rating: number;
  year_published: number;
  players: string;
  min_age: number;
  average_strategy_complexity: number;
  playtime: number;
  official_url: string;
}
