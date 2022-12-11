import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import Show from './Components/Pages/Show';
import Starredpage from './Components/Pages/Starredpage';
import { ThemeProvider } from 'styled-components';
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
