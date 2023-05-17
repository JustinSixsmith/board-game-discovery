// useGames.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";
import { GameQuery } from "../App";

export interface Game {
  id: string;
  name: string;
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

const apiClient = new APIClient<Game>(`/search?client_id=${CLIENT_ID}`);

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam = 0 }) => {
      const games = await apiClient.getAll({
        params: {
          id: gameQuery.id,
          categories: gameQuery.category?.id,
          mechanics: gameQuery.mechanic?.id,
          order_by: gameQuery.sortOrder,
          name: gameQuery.searchText,
          skip: pageParam,
        },
      });
      return { count: games.length, games };
    },
    getNextPageParam: (lastPage) => {
      const { games } = lastPage;
      return games.length > 0 ? games.length : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGames;
