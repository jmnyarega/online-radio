import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../Navbar/index";
import Discover from "../Discover";
import Home from "../Home";
import Play from "../Play";

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
