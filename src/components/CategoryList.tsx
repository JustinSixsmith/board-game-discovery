import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
}

const CategoriesList = ({ onSelectCategory }: Props) => {
  const { data, loading, error } = useCategories();

  if (error) return null;
  if (loading) return <Spinner>Loading...</Spinner>;

  return (
    <List>
      {data.map((category) => (
        <ListItem key={category.id}>
          <Button
            onClick={() => {
              onSelectCategory(category);
            }}
            fontSize="lg"
            variant="link"
            padding="none"
          >
            {category.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;

{
  /* <Select>
      {data.map((category) => (
        <option
          onChange={() => console.log(category)}
          key={category.id}
          value={category.name}
        >
          {category.name}
        </option>
      ))}
    </Select> */
}
