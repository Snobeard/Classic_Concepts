import React from 'react';

class Neighborhoods extends React.Component {
  componentDidMount() {
    let section = document.querySelector('#neighborhoods');

    // mattL - setTimeout is necessary to allow the page to render the section
    setTimeout(() => {
      section.classList.add('fade-in');
    }, 10);

    let neighborhoods = document.querySelector('#navigation .neighborhoods a');
    neighborhoods.classList.add('active');
  }

  // mattL - remove the class so it will fade-in on next selection
  componentWillUnmount() {
    let section = document.querySelector('#neighborhoods');
    section.classList.remove('fade-in');

    let neighborhoods = document.querySelector('#navigation .neighborhoods a');
    neighborhoods.classList.remove('active');
  }
  
  render() {
    return (
      <section id='neighborhoods'>
        <h1>Current Neighborhoods</h1>
      </section>
    );
  }
}

export default Neighborhoods;