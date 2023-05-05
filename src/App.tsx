import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import MechanicsList from "./components/MechanicsList";

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
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <VStack>
            <CategoryList
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
            <MechanicsList />
          </VStack>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedCategory={selectedCategory} />
      </GridItem>
    </Grid>
  );
}

export default App;
