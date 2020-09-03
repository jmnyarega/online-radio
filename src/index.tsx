import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/index";
import "./utils/css/theme.css";
import "./utils/css/background.css";
import "./utils/css/layout.css";
import "./utils/css/typography.css";
import "./utils/css/button.css";
import "./utils/css/shapes.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
