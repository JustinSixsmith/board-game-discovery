import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import CategoryList from "./components/CategoryList";
import MechanicList from "./components/MechanicList";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import { Mechanic } from "./hooks/useMechanics";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedMechanic, setSelectedMechanic] = useState<Mechanic | null>(
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
          <Stack>
            <CategoryList
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
            <MechanicList
              onSelectMechanic={(mechanic) => setSelectedMechanic(mechanic)}
            />
          </Stack>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedCategory={selectedCategory} />
      </GridItem>
    </Grid>
  );
}

export default App;
