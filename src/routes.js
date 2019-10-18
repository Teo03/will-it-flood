import React from 'react';
import Search from "./components/Search";
import Map from "./components/Map";
import Oceans from "./components/Oceans";
import About from "./components/About";

const routes = {
  "/": () => <Search />,
  "/about": () => <About />,
  "/map": () => <Map />,
  "/oceans": () => <Oceans />
};

export default routes;