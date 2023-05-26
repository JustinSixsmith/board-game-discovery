import { useQuery } from "@tanstack/react-query";
import { Image } from "../entities/Image";
import APIClient from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

const useImages = (gameId: string) => {
  const apiClient = new APIClient<Image>("/game/images");

  return useQuery({
    queryKey: ["images", gameId],
    queryFn: () =>
      apiClient.getAll({
        params: {
          client_id: CLIENT_ID,
          game_id: gameId,
          pretty: true,
        },
      }),
  });
};

export default useImages;
