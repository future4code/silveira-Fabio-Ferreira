import React from "react";
import { ThemeProvider } from "@mui/material";
import { Router } from "./Routes/router";
import theme from "./Constants/theme";
import { GlobalStyle } from "./GlobalStyled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
