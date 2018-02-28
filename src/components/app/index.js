import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../home';
import About from '../about';
import Neighborhoods from '../neighborhoods';
import Header from '../header';
import catchAll from '../catch-all';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>

          <Header />

          <article>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/neighborhoods' component={Neighborhoods}/>
              {/* TODO: finish nav paths */}
              <Route component={catchAll} /> 
            </Switch>
          </article>

        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;