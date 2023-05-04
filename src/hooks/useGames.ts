import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  image_url: string;
  year_published: number;
  min_age: number;
  players: number;
  playtime: number;
  average_strategy_complexity: number;
  average_user_rating: number;
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
