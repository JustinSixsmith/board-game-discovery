import { Box, Heading, Spinner } from "@chakra-ui/react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
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
    </>
  );
};

export default GameDetailPage;
