import { Heading } from "@chakra-ui/react";
import useCategory from "../hooks/useCategory";
import useMechanic from "../hooks/useMechanic";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const categoryId = useGameQueryStore((s) => s.gameQuery.categoryId);
  const category = useCategory(categoryId);

  const mechanicId = useGameQueryStore((s) => s.gameQuery.mechanicId);
  const mechanic = useMechanic(mechanicId);

  function getHeading(name: string) {
    if (name === "Accessory") return "Accessories";
    return `${category?.name || "All"} Board Games ${
      mechanicId ? `with ${mechanic?.name} Mechanics` : ""
    }`;
  }

  const heading = getHeading(category?.name || "");

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
