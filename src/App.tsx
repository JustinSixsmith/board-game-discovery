import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import MechanicSelector from "./components/MechanicSelector";
import { Mechanic } from "./hooks/useMechanics";

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
          <Stack>
            <CategoryList
              selectedCategory={gameQuery.category}
              onSelectCategory={(category) =>
                setGameQuery({ ...gameQuery, category })
              }
            />
          </Stack>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingX={2}>
          <MechanicSelector
            onSelectMechanic={(mechanic) =>
              setGameQuery({ ...gameQuery, mechanic })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
