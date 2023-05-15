import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import CategoryList from "./components/CategoryList";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import MechanicSelector from "./components/MechanicSelector";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";
import { Category } from "./hooks/useCategories";
import { Mechanic } from "./hooks/useMechanics";

export interface GameQuery {
  id: string;
  category: Category | null;
  mechanic: Mechanic | null;
  sortOrder: string;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <CategoryList
            selectedCategory={gameQuery.category}
            onSelectCategory={(category) =>
              setGameQuery({ ...gameQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Box>
            <MechanicSelector
              onSelectMechanic={(mechanic) =>
                setGameQuery({ ...gameQuery, mechanic })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
