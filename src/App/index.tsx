import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from "../Navbar/index";
import Discover from "../Discover";
import Home from "../Home";
import Favourites from "../Favourites";
import Play from "../Play";

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
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
            <Home mostlistened={[0, 2, 6, 8]} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
