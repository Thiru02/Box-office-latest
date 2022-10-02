import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Homepage from './Components/Pages/Homepage';
import Starredpage from './Components/Pages/Starredpage';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/starred">
          <Starredpage />
        </Route>
        <Route>404 Not found</Route>
      </Switch>
    </div>
  );
}

export default App;
