import {
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { AiFillCalendar, AiOutlineGlobal } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
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
        <Heading fontSize="2xl">{game.name}</Heading>
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
            <a href={game.official_url} target="_blank">
              <u>Official URL</u>
            </a>
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

// {/* <Card>
//       <Image src={game.images.medium} height="200px" objectFit="contain" />
//       <CardBody>
//         <Heading fontSize="2xl">{game.name}</Heading>
//         <HStack justifyContent="space-between">
//           <HStack marginY={1} color="gray.500" fontSize="sm">
//             <Text>
//               <Icon as={AiFillCalendar} marginX="2px" />
//               {game.year_published}
//             </Text>
//             <Text>
//               <Icon as={HiUserGroup} marginX="2px" />
//               {game.players}
//             </Text>
//           </HStack>
//           <UserRating score={parseFloat(game.average_user_rating.toFixed(2))} />
//         </HStack>
//         <HStack color="gray.500" fontSize="sm">
//           <Text>
//             <Icon as={FaChild} marginX="2px" />
//             {game.min_age}+
//           </Text>
//           {/* <Text>
//             <Icon as={GiGears} marginRight="2px" />
//             {game.average_strategy_complexity.toFixed(2)}
//           </Text> */}
//           <Text>
//             <Icon as={BiTimeFive} marginX="2px" />
//             {game.playtime}
//             {" min."}
//           </Text>
//         </HStack>
//       </CardBody>
//     </Card> */}
