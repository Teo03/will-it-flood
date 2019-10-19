import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./components/Search";
import Map from "./components/Map";
import About from "./components/About";
import Causes from "./components/Causes";
import Effects from "./components/Effects";
import Bar from './components/Bar';

function App() {
  return (
    <Router>
      <div>
        <Bar />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/map" exact component={Map} />
          <Route path="/about" exact component={About} />
          <Route path="/causes" exact component={Causes} />
          <Route path="/effects" exact component={Effects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;