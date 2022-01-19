import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Header, Map, PlaceDetails, List } from "./components";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} className='w-full'>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
