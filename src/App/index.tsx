//@ts-nocheck
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../Navbar/index";
import Discover from "../Discover";
import Home from "../Home";
import Favourites from "../Favourites";
import Play from "../Play";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/discover" component={Discover} />
        <Route path="/play" component={Play} />
        <Route path="/favourites" component={Favourites} />
        <Route exec path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
