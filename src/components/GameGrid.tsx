import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  games: Game[];
}

interface Props {
  searchName: string;
}

const GameGrid = ({ searchName }: Props) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const id = "JLBr5npPhV";

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>(`/search?client_id=${id}`)
      .then((res) => {
        console.log(res.data.games);
        setGames(res.data.games);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
