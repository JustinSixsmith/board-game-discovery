import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
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
    <>
      <Heading fontSize="2xl" marginLeft={6} marginY={3}>
        Categories
      </Heading>
      <List>
        <ListItem>
          <Button
            fontWeight={selectedCategory?.id ? "normal" : "bold"}
            onClick={() => onSelectCategory({ id: "", name: "" })}
            variant="link"
            padding="none"
            size="lg"
          >
            All Categories
          </Button>
        </ListItem>
        {data.map((category) => (
          <ListItem key={category.id}>
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={
                category.id === selectedCategory?.id ? "bold" : "normal"
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
    </>
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
