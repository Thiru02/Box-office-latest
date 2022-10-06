import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import Show from './Components/Pages/Show';
import Starredpage from './Components/Pages/Starredpage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/starred">
          <Starredpage />
        </Route>
        <Route exact path="/:id">
          <Show />
        </Route>
        <Route>404 Not found</Route>
      </Switch>
    </div>
  );
}

export default App;
