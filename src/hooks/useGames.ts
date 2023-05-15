import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

const apiClient = new APIClient<Game>(`/search?client_id=${CLIENT_ID}`);

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
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .getAll({
          params: {
            id: gameQuery.id,
            categories: gameQuery.category?.id,
            mechanics: gameQuery.mechanic?.id,
            order_by: gameQuery.sortOrder,
            name: gameQuery.searchText,
          },
        })
        .then((data) => ({ count: data.length, games: data })), // wrap the games array to match FetchResponse<Game>
  });

export default useGames;

//   "/search",
//   {
//     params: {
//       categories: gameQuery.category?.id,
//       mechanics: gameQuery.mechanic?.id,
//       order_by: gameQuery.sortOrder,
//       name: gameQuery.searchText,
//     },
//   },
//   [gameQuery]
// );
