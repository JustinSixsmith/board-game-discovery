import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
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
            onClick={() => onSelectSortOrder(order.value)}
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
