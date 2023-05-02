import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
    >
      <GridItem area="nav" background="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" background="gold">
          Asidex``
        </GridItem>
      </Show>
      <GridItem area="main" background="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
