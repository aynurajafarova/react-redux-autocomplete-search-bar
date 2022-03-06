import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import Container from "./client/shared/components/Container/Container";
import { store } from "./client/shared/redux/store";

import "../src/client/shared/assets/styles/main.css";

ReactDOM.render(
  <Provider {...{ store }}>
    <Container>
      <App />
    </Container>
  </Provider>,
  document.getElementById("root")
);
