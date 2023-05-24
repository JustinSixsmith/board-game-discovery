import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import DefinitionItem from "../components/DefinitionItem";
import useCategories from "../hooks/useCategories";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);
  const { data: categories } = useCategories();

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const gameCategories = game.categories
    ?.map((category) => category.id)
    .map((categoryId) =>
      categories.find((category) => category.id === categoryId)
    );

  return (
    <>
      <Heading>{game.name}</Heading>
      <Box>{parse(game.description)}</Box>
      <DefinitionItem term="Categories">
        {gameCategories?.map((category) => (
          <Text key={category?.id}>{category?.name}</Text>
        ))}
      </DefinitionItem>
    </>
  );
};

export default GameDetailPage;
