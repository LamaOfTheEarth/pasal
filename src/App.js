import * as React from 'react';
import Products from "./scenes/products/Products";
import {Box} from "@mui/material";
import Topbar from "./scenes/global/topbar/Topbar";

function App() {
  return (
      <Box sx={{display: 'flex'}}>
        <Topbar />
        <Products/>
      </Box>

  );
}

export default App;
