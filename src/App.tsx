import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import ComplexitySelector from "./components/ComplexitySelector";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" paddingX={2}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={1}>
          <Stack>
            <CategoryList
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
          </Stack>
        </GridItem>
      </Show>
      <GridItem area="main">
        <ComplexitySelector />
        <GameGrid selectedCategory={selectedCategory} />
      </GridItem>
    </Grid>
  );
}

export default App;
