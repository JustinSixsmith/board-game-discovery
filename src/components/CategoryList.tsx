import {
  Button,
  Heading,
  List,
  ListItem,
  Select,
  Spinner,
} from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const CategoriesList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, loading, error } = useCategories();

  if (error) return null;
  if (loading) return <Spinner>Loading...</Spinner>;

  return (
    <List>
      <ListItem>
        <Button
          onClick={() => onSelectCategory({ id: "", name: "" })}
          variant="link"
          padding="none"
          size="lg"
        >
          <Heading as="h2" fontSize="xl">
            All Categories
          </Heading>
        </Button>
      </ListItem>
      {data.map((category) => (
        <ListItem key={category.id}>
          <Button
            fontWeight={
              category.id === selectedCategory?.id ? "bolder" : "normal"
            }
            onClick={() => onSelectCategory(category)}
            variant="link"
            padding="none"
            size="lg"
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
  /* <Select
      onChange={(event: { target: { value: string } }) =>
        onSelectCategory(
          data.find((category) => category.id === event.target.value) || {
            id: "",
            name: "",
          }
        )
      }
      variant="filled"
      placeholder="Category"
      size="md"
    >
      {data.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </Select> */
}
