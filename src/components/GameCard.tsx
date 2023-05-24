import {
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  Link as WebLink,
} from "@chakra-ui/react";
import { AiFillCalendar, AiOutlineGlobal } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import UserRating from "./UserRating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.images.medium} height="200px" objectFit="contain" />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <Text color="gray.500" fontSize="sm">
            {game.primary_designer ? game.primary_designer.name : ""}
          </Text>
          <UserRating score={parseFloat(game.average_user_rating.toFixed(2))} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.id}>{game.name}</Link>
        </Heading>
        <HStack
          marginY={2}
          color="gray.500"
          fontSize="sm"
          justifyContent="space-between"
          whiteSpace="nowrap"
        >
          <Text>
            <Icon as={AiFillCalendar} marginX={1} />
            {game.year_published}
          </Text>
          <Text>
            <Icon as={HiUserGroup} marginX={1} />
            {game.players}
          </Text>
          <Text>
            <Icon as={FaChild} marginX={1} />
            {game.min_age}+
          </Text>
          <Text>
            <Icon as={GiGears} marginX={1} />
            {game.average_strategy_complexity.toFixed(2)}
          </Text>
        </HStack>
        <HStack
          color="gray.500"
          fontSize="sm"
          whiteSpace="nowrap"
          justifyContent="space-between"
        >
          <Text>
            <Icon as={BiTimeFive} marginX={1} />
            {game.playtime}
            {" min."}
          </Text>
          <Text>
            <Icon as={AiOutlineGlobal} marginX={1} />
            <WebLink href={game.official_url} target="_blank">
              <u>Official URL</u>
            </WebLink>
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
