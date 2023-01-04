import React from "react";
// Bootstrap JS:
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap CSS:
import "bootstrap/dist/css/bootstrap.min.css";
// Chart.js:
import Chart from "chart.js/auto";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "../public/style.css";
import Paths from "./components/Paths";
import { NavBar } from "./components/views";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Paths />
    </Router>
  </Provider>
);
