import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGames from "../hooks/useGames";

const ComplexitySelector = () => {
  const { data, error } = useGames();

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Complexity
      </MenuButton>
      <MenuList>
        <MenuItem>0 - 2</MenuItem>
        <MenuItem>2 - 3</MenuItem>
        <MenuItem>3 - 4</MenuItem>
        <MenuItem>4 - 5</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ComplexitySelector;
