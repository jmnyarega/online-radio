import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App/index";
import "./utils/css/theme.css";
import "./utils/css/background.css";
import "./utils/css/layout.css";
import "./utils/css/typography.css";
import "./utils/css/button.css";
import "./utils/css/shapes.css";
import "./utils/css/input.css";
import "./utils/css/animations.css";

/* istanbul ignore file */
import { Bugfender } from "@bugfender/sdk";

Bugfender.init({
  appKey: "nhAJcOFSSL0mvlZAxFx8eahMmrSJtscC",
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
