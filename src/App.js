import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./components/Search";
import Map from "./components/Map";
import Oceans from "./components/Oceans";
import About from "./components/About";
import Bar from './components/Bar';

function App() {
  return (
    <Router>
      <div>
        <Bar />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/map/:lat/:lon" exact component={Map} />
          <Route path="/about" exact component={About} />
          <Route path="/oceans" exact component={Oceans} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;