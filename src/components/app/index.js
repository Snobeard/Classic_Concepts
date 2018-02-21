import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home';
import catchAll from '../redirect';

class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' />
            <Route component={catchAll} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;