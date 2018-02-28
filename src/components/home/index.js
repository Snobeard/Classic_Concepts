import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    let section = document.querySelector('#home');

    // mattL - setTimeout is necessary to allow the page to render the section
    setTimeout(() => {
      section.classList.add('fade-in');
    }, 10);

    let navLink = document.querySelector('#navigation .home a');
    navLink.classList.add('active');
  }

  // mattL - remove the class so it will fade-in on next selection
  componentWillUnmount() {
    let section = document.querySelector('#home');
    section.classList.remove('fade-in');

    let navLink = document.querySelector('#navigation .home a');
    navLink.classList.remove('active');
  }
  
  render() {
    return (
      <section id='home'>
        <h1>Classic Concepts Fine Homes</h1>
      </section>
    );
  }
}

export default Home;