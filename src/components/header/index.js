import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import lakeridge from '../../images/lakeridge-logo.jpg';

class Header extends React.Component {
  render() {
    return(
      <header>
        <img src={lakeridge} alt='Lakeridge Logo' />
        
        <nav>
          <ul id='navigation'>
            <li className='home'><Link to='/'>Home</Link></li>
            <li className='neighborhoods'><Link to='/neighborhoods'>Neighborhoods</Link></li>
            <li className='gallery'><Link to='/gallery'>Gallery</Link></li>
            <li className='custom-homes'><Link to='/custom-homes'>Custom Homes</Link></li>
            <li className='we-buy-land'><Link to='/we-buy-land'>We Buy Land</Link></li>
            <li className='about'><Link to='/about'>About Us</Link></li>
            <li className='contact'><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;