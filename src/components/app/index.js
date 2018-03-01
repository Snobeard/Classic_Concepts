import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../home';
import About from '../about';
import NeighborhoodList from '../neighborhood-list';
import Header from '../header';
import catchAll from '../catch-all';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>

          {/* Header */}
          <Header />

          {/* Articles */}
          <React.Fragment>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About}/>
              <Route path='/neighborhoods' component={NeighborhoodList}/>
              {/* TODO: finish nav paths */}
              {/* <Route component={catchAll} />  */}
            </Switch>
          </React.Fragment>


          {/* TODO: Footer */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;