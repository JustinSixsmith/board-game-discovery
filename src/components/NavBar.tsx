import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import icon from "../assets/icons8-dice-100.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={icon} boxSize="60px" />
      <Heading as="h1" fontSize="2xl" fontWeight="bold">
        Board Game Discovery
      </Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
