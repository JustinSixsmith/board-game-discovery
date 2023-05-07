import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import icon from "../assets/icons8-dice-100.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={icon} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      {/* <Heading as="h1" fontSize="3xl" fontWeight="bold">
        Board Game Discovery
      </Heading> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
