import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  games: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const id = "JLBr5npPhV";

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>(`/search?client_id=${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data.games);
        setGames(res.data.games);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
