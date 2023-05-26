import { Box, Heading, Spinner } from "@chakra-ui/react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import GameImages from "../components/GameImages";
import GameVideos from "../components/GameVideos";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Box>{parse(game.description)}</Box>
      <GameAttributes game={game} />
      <GameVideos gameId={game.id} />
      <GameImages gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
