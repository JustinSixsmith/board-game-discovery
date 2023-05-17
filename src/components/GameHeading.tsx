import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useCategories from "../hooks/useCategories";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: categories } = useCategories();
  const category = categories?.find((c) => c.id === gameQuery.categoryId);

  const heading = `${category?.name || ""} Board Games ${
    gameQuery.mechanic ? `w/${gameQuery.mechanic?.name} Mechanics` : ""
  }`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
