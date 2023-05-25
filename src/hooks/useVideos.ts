import { useQuery } from "@tanstack/react-query";
import { Video } from "../entities/Video";
import APIClient from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

const useVideos = (gameId: string) => {
  const apiClient = new APIClient<Video>("/game/videos");

  return useQuery({
    queryKey: ["videos", gameId],
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

export default useVideos;
