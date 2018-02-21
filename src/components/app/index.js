import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <h1>Proof of Life!</h1>
        <BrowserRouter>
          <div id='handle-route'>
            <Route exact path='/' />
            <Route exact path='/about' />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;