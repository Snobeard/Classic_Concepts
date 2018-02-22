import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
          <ul id='navigation'>
            <li className='home'><Link to='/'>Home</Link></li>
            <li className='about'><Link to='/about'>About Us</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;