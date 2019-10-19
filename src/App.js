import React from "react";
import {
  BrowserRouter as HashRouter,
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
    <HashRouter>
      <Bar />
      <div>
        <Route path="/" exact component={Search} />
        <Route path="/map" exact component={Map} />
        <Route path="/about" exact component={About} />
        <Route path="/causes" exact component={Causes} />
        <Route path="/effects" exact component={Effects} />
      </div>
    </HashRouter>
  );
}

export default App;