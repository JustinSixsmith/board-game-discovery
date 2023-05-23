import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import CategoryList from "../components/CategoryList";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import MechanicSelector from "../components/MechanicSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <CategoryList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <MechanicSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
