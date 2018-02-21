import React from 'react';

import lakeridge from '../../images/lakeridge-logo.jpg';

class Home extends React.Component {
  render() {
    return (
      <div id='home'>
        <h1>Classic Concepts Fine Homes</h1>
        <img src={lakeridge} alt='Lakeridge Logo' height='150px' />
      </div>
    );
  }
}

export default Home;