import React from "react";
import {Switch , Route } from 'react-router-dom';
function App() {
  return <Switch>
    <Route exact path="/">home page</Route>

    <Route>Error page</Route>
  </Switch>;


}

export default App;

