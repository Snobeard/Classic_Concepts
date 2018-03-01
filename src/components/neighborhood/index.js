import React from 'react';

class Neighborhood extends React.Component {
  componentDidMount() {
    // let article = document.querySelector('#placeholder');

    // // mattL - setTimeout is necessary to allow the page to render the article
    // setTimeout(() => {
    //   article.classList.add('fade-in');
    // }, 10);

    // let navLink = document.querySelector('#navigation .placeholder a');
    // navLink.classList.add('active');
  }

  // mattL - remove the class so it will fade-in on next selection
  componentWillUnmount() {
    // let article = document.querySelector('#placeholder');
    // article.classList.remove('fade-in');

    // let navLink = document.querySelector('#navigation .placeholder a');
    // navLink.classList.remove('active');
  }
  
  render() {
    let { title, description, houses, neighborhoodID } = this.props;
    console.log(neighborhoodID);
    console.log(title);
    
    return (
      <section id={title}>
        <h1>{title}</h1>
      </section>
    );
  }
}

export default Neighborhood;