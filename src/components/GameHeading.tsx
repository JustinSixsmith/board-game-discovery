import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useCategory from "../hooks/useCategory";
import useMechanic from "../hooks/useMechanic";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const category = useCategory(gameQuery.categoryId);
  const mechanic = useMechanic(gameQuery.mechanicId);

  const heading = `${category?.name || ""} Board Games ${
    gameQuery.mechanicId ? `w/${mechanic?.name} Mechanics` : ""
  }`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
