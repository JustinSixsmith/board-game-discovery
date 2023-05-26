import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>(`/search?client_id=${CLIENT_ID}`);

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam = 0 }) => {
      const games = await apiClient.getAll({
        params: {
          categories: gameQuery.categoryId,
          mechanics: gameQuery.mechanicId,
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
    staleTime: ms("24h"),
  });
};

export default useGames;
