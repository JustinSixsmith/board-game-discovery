import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    {
      value: "rank",
      label: "Rank",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "year_published",
      label: "Year published",
    },
    {
      value: "min_age",
      label: "Min age",
    },
    {
      value: "min_playtime",
      label: "Min playtime",
    },
    {
      value: "max_playtime",
      label: "Max playtime",
    },
    {
      value: "min_players",
      label: "Min players",
    },
    {
      value: "max_players",
      label: "Max players",
    },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
