import { List, ListItem, Text } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

const CategoriesList = () => {
  const { data } = useCategories();

  return (
    <List>
      {data.map((m) => (
        <ListItem key={m.id}>
          <Text fontSize="lg">{m.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;
