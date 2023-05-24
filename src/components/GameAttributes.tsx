import { Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import useCategories from "../hooks/useCategories";
import useMechanics from "../hooks/useMechanics";
import DefinitionItem from "./DefinitionItem";
import UserRating from "./UserRating";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const { data: categories } = useCategories();
  const { data: mechanics } = useMechanics();

  const gameCategories = game.categories
    ?.map((category) => category.id)
    .map((categoryId) =>
      categories.find((category) => category.id === categoryId)
    );

  const gameMechanics = game.mechanics
    ?.map((mechanic) => mechanic.id)
    .map((mechanicId) =>
      mechanics.find((mechanic) => mechanic.id === mechanicId)
    );

  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Categories">
        {gameCategories.map((category) => (
          <Text key={category?.id}>{category?.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Rating">
        <UserRating score={parseFloat(game.average_user_rating.toFixed(2))} />
      </DefinitionItem>
      <DefinitionItem term="Mechanics">
        {gameMechanics.map((mechanic) => (
          <Text key={mechanic?.id}>{mechanic?.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publisher">
        <Text key={game.primary_publisher.id}>
          {game.primary_publisher.name}
        </Text>
      </DefinitionItem>
      <DefinitionItem term="Designer">
        <Text key={game.primary_designer.id}>{game.primary_designer.name}</Text>
      </DefinitionItem>
      <DefinitionItem term="Website">
        <Link href={game.official_url} target="_blank">
          Official URL
        </Link>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
