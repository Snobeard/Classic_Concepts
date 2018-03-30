import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <p className='created-by'><Link to='http://github.com/snobeard' target='_blank'>website by Snobeard</Link></p>
      </footer>
    );
  }
}

export default Footer;