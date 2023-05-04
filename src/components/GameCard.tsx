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
import { GiGears } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import UserRating from "./UserRating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={game.images.medium}
        width="100%"
        height="200px"
        objectFit="cover"
        // align image, all width showing, no stretching
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <HStack marginY={1} color="gray.500" fontSize="sm">
            <Text>
              <Icon as={AiFillCalendar} marginRight="1px" />
              {game.year_published}
            </Text>
            <Text>
              <Icon as={HiUserGroup} marginRight="1px" />
              {game.players}
            </Text>
          </HStack>
          <UserRating score={parseFloat(game.average_user_rating.toFixed(2))} />
        </HStack>
        <HStack color="gray.500" fontSize="sm">
          <Text>
            <Icon as={FaChild} marginRight="1px" />
            {game.min_age}+
          </Text>
          {/* <Text>
            <Icon as={GiGears} marginRight="2px" />
            {game.average_strategy_complexity.toFixed(2)}
          </Text> */}
          <Text>
            <Icon as={BiTimeFive} margin="2px" />
            {game.playtime}
            {" min."}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
