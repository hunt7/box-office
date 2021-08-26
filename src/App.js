import React from "react";
import {Switch , Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Start from "./pages/Start";

function App() {
  return (
  <div>
  <Nav/>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    
    <Route exact path="/start">
      <Start/>
    </Route>

    <Route>
      <div>Error page</div>
    </Route>

  </Switch>
  </div>
  );
}

export default App;

