import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import { Mechanic } from "./hooks/useMechanics";
import CategoryList from "./components/CategoryList";
import MechanicSelector from "./components/MechanicSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  category: Category | null;
  mechanic: Mechanic | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <CategoryList
            selectedCategory={gameQuery.category}
            onSelectCategory={(category) =>
              setGameQuery({ ...gameQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <MechanicSelector
            onSelectMechanic={(mechanic) =>
              setGameQuery({ ...gameQuery, mechanic })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
