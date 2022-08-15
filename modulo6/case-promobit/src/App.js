import React from "react";
import { GlobalState } from "./Global/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import { Router } from "./Routes/router";

const App = () => {
  return (
    <div>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
};

export default App;
