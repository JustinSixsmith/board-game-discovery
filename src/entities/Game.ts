import { Category } from "./Category";
import { Designer } from "./Designer";
import { Image } from "./Image";
import { Mechanic } from "./Mechanic";
import { Publisher } from "./Publisher";

export interface Game {
  artists: string[];
  average_strategy_complexity: number;
  average_user_rating: number;
  categories: Category[];
  description: string;
  handle: string;
  id: string;
  images: Image;
  mechanics: Mechanic[];
  min_age: number;
  msrp: number;
  name: string;
  official_url: string;
  players: string;
  playtime: number;
  primary_designer: Designer;
  primary_publisher: Publisher;
  year_published: number;
}
