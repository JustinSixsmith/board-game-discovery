import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

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

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>(["games", gameQuery], () =>
    apiClient
      .get<FetchResponse<Game>>(`/search?client_id=${CLIENT_ID}`, {
        params: {
          categories: gameQuery.category?.id,
          mechanics: gameQuery.mechanic?.id,
          order_by: gameQuery.sortOrder,
          name: gameQuery.searchText,
        },
      })
      .then((res) => res.data)
  );
};

export default useGames;

// useData<Game>(
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
