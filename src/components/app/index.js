import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../home';
import About from '../about';
import CustomHomes from '../custom-homes';
import NeighborhoodList from '../neighborhood-list';
import Header from '../header';
import Footer from '../footer';
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
              <Route path='/neighborhoods' component={NeighborhoodList}/>
              {/* <Route path='/gallery' component={}/> */}
              <Route path='/custom-homes' component={CustomHomes}/>
              {/* <Route path='/we-buy-land' component={}/> */}
              <Route path='/about' component={About}/>
              {/* TODO: finish nav paths */}
              {/* <Route component={catchAll} />  */}
            </Switch>
          </React.Fragment>

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;