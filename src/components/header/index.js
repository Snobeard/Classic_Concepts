import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import neighborhoodData from '../../data/neighborhoods';
import lakeridge from '../../images/lakeridge-logo.jpg';

class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to='/' >
          <img src={lakeridge} alt='Lakeridge Logo' />
        </Link>
        
        <nav>
          <ul id='navigation'>
            <li className='home'><Link to='/'>Home</Link></li>
            <li className='neighborhoods'><Link to='/neighborhoods'>Neighborhoods</Link></li>
            <li className='gallery'><Link to='/gallery'>Gallery</Link></li>
            <li className='custom-homes'><Link to='/custom-homes'>Custom Homes</Link></li>
            <li className='we-buy-land'><Link to='/we-buy-land'>We Buy Land</Link></li>
            <li className='about'><Link to='/about'>About Us</Link></li>
            <li className='contact'><Link to='/contact'>Contact Us</Link></li>

            {/* build neighborhoods list */}
            <ul id='sub-nav'>
              {neighborhoodData.map((eachNeighborhood, index) => {
                let { title } = eachNeighborhood;
                let route = title.trim().toLowerCase().replace(/\s+/, '-');
                return (
                  <li key={index} className={route}>
                    <Link to={`/neighborhoods/${route}`} >{title}</Link>
                  </li>
                );
              })}
            </ul>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;