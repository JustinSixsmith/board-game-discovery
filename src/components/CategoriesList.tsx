import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

const CategoriesList = () => {
  const { data, loading, error } = useCategories();

  if (error) return null;
  if (loading) return <Spinner>Loading...</Spinner>;

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
