import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/search");

const useGame = (id: string) =>
  useQuery({
    queryKey: ["games", id],
    queryFn: () =>
      apiClient
        .getAll({
          params: {
            client_id: CLIENT_ID,
            ids: id,
          },
        })
        .then((games) => games[0]), // extract the first game from the array
  });

export default useGame;
