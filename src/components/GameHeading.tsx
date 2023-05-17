import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useCategories from "../hooks/useCategories";
import useMechanics from "../hooks/useMechanics";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: categories } = useCategories();
  const category = categories?.find((c) => c.id === gameQuery.categoryId);

  const { data: mechanics } = useMechanics();
  const mechanic = mechanics?.find((m) => m.id === gameQuery.mechanicId);

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
