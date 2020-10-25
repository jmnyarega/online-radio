import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../Navbar/index";
import Discover from "../Discover";
import Home from "../Home";
import Favourites from "../Favourites";
import Play from "../Play";
import { Bugfender } from "@bugfender/sdk";

Bugfender.init({
  appKey: "nhAJcOFSSL0mvlZAxFx8eahMmrSJtscC",
});

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route exe path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
