import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { AiFillCalendar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { GoGear } from "react-icons/go";
import { FaChild } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.image_url} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Grid templateColumns="repeat(3, 1fr)" paddingTop={2} opacity={0.6}>
          <GridItem fontSize="sm">
            <Icon as={AiFillCalendar} /> {game.year_published}
          </GridItem>
          <GridItem fontSize="sm">
            <Icon as={HiUserGroup} /> {game.players}
          </GridItem>
          <GridItem fontSize="sm">
            <Icon as={BiTimeFive} flexWrap="nowrap" /> {game.playtime}
          </GridItem>
          <GridItem fontSize="sm">
            <Icon as={FaChild} /> {game.min_age}+
          </GridItem>
          <GridItem fontSize="sm">
            <Icon as={GoGear} /> {game.average_strategy_complexity.toFixed(2)}
          </GridItem>
          <GridItem fontSize="sm">
            <Icon as={RiStarSFill} /> {game.average_user_rating.toFixed(2)}
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default GameCard;
