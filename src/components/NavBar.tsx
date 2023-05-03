import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import icon from "../assets/icons8-dice-100.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={icon} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
