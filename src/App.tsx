import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import MechanicSelector from "./components/MechanicSelector";
import { Mechanic } from "./hooks/useMechanics";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedMechanic, setSelectedMechanic] = useState<
    Mechanic | null | undefined
  >(null);

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
        <MechanicSelector
          onSelectMechanic={(selectedMechanic) =>
            setSelectedMechanic(selectedMechanic)
          }
        />
        <GameGrid selectedCategory={selectedCategory} />
      </GridItem>
    </Grid>
  );
}

export default App;
