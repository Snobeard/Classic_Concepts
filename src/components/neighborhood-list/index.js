import React from 'react';
import neighborhoodData from '../../data/neighborhoods';

class NeighborhoodsList extends React.Component {
  componentDidMount() {
    let section = document.querySelector('#neighborhoods');

    // mattL - setTimeout is necessary to allow the page to render the section
    setTimeout(() => {
      section.classList.add('fade-in');
    }, 10);

    let navLink = document.querySelector('#navigation .neighborhoods a');
    navLink.classList.add('active');
  }

  // mattL - remove the class so it will fade-in on next selection
  componentWillUnmount() {
    let section = document.querySelector('#neighborhoods');
    section.classList.remove('fade-in');

    let navLink = document.querySelector('#navigation .neighborhoods a');
    navLink.classList.remove('active');
  }
  
  render() {
    return (
      <section id='neighborhoods'>
        <h1>Current Neighborhoods</h1>
      </section>
    );
  }
}

export default NeighborhoodsList;

