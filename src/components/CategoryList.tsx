import {
  Button,
  Heading,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategoryId?: string;
}

const CategoriesList = ({ selectedCategoryId, onSelectCategory }: Props) => {
  const { data, isLoading, error } = useCategories();

  if (error) return <Text>Error: {error.message}</Text>;
  if (isLoading) return <Spinner margin={20} />;

  return (
    <>
      <Heading fontSize="2xl" marginLeft={7} marginY={3}>
        Categories
      </Heading>
      <List marginLeft={3}>
        <ListItem>
          <Button
            fontWeight={selectedCategoryId ? "normal" : "bold"}
            onClick={() => onSelectCategory({ id: "", name: "" })}
            variant="link"
            padding="none"
            marginY={0.5}
            size="md"
          >
            All Categories
          </Button>
        </ListItem>
        {data?.map((category: Category) => (
          <ListItem key={category.id}>
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={
                category.id === selectedCategoryId ? "bold" : "normal"
              }
              onClick={() => onSelectCategory(category)}
              variant="link"
              padding="none"
              marginY={0.5}
              size="md"
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
