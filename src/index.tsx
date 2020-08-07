import React from "react";
import ReactDOM from "react-dom";
import Home from "./apps/pages/Home";
import Providers from "./apps/providers";
import { GlobalStyles } from "./styled";

ReactDOM.render(
  <Providers>
    <GlobalStyles />
    <Home />
  </Providers>,
  document.getElementById("root")
);
