import {
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { AiFillCalendar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { GoGear } from "react-icons/go";
import { FaChild } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import UserRating from "./UserRating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="250px" borderRadius={10} overflow="hidden">
      <Image src={game.images.medium} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <HStack marginY={1} color="gray.500" fontSize="sm">
            <Text>
              <Icon as={AiFillCalendar} />
              {game.year_published}
            </Text>
            <Text>
              <Icon as={HiUserGroup} />
              {game.players}
            </Text>
            <Text>
              <Icon as={FaChild} />
              {game.min_age}+
            </Text>
          </HStack>
          <UserRating score={parseFloat(game.average_user_rating.toFixed(2))} />
        </HStack>
        <HStack marginY={1} color="gray.500" fontSize="sm">
          <Text>
            <Icon as={GoGear} />
            {game.average_strategy_complexity.toFixed(2)}
          </Text>
          <Text>
            <Icon as={BiTimeFive} />
            {game.playtime}
            {" min."}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
