import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import { Category } from "../entities/Category";
import useCategories from "../hooks/useCategories";
import useGameQueryStore from "../store";

const CategoriesList = () => {
  const { data, isLoading, error } = useCategories();
  const selectedCategoryId = useGameQueryStore((s) => s.gameQuery.categoryId);
  const setSelectedCategoryId = useGameQueryStore((s) => s.setCategoryId);

  if (error) return null;

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
            onClick={() => setSelectedCategoryId("")}
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
              onClick={() => setSelectedCategoryId(category.id)}
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
