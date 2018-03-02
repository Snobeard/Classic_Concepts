import React from 'react';
import { Link } from 'react-router-dom';

class Neighborhood extends React.Component {
  componentDidMount() {
    let article = document.querySelector('.house-list');

    // mattL - setTimeout is necessary to allow the page to render the article
    setTimeout(() => {
      article.classList.add('fade-in');
    }, 10);

    // let navLink = document.querySelector('#navigation .placeholder a');
    // navLink.classList.add('active');
  }

  // mattL - remove the class so it will fade-in on next selection
  componentWillUnmount() {
    let article = document.querySelector('.house-list');
    article.classList.remove('fade-in');

    // let navLink = document.querySelector('#navigation .placeholder a');
    // navLink.classList.remove('active');
  }
  
  render() {
    let { title, description, houses, neighborhoodID } = this.props;
    console.log(houses);
    
    return (
      <article id={title} className='house-list'>
        <h1>{title}</h1>
        <ul>
          { // build each house
            houses.map((eachHouse, index) => (
              <li key={index} className='house'>
                <img src='http://placehold.it/250x200' alt='200px placeholder' />
                <h4>{eachHouse.title}</h4>
                <ul>
                  <li>{eachHouse.squareFeet}</li>
                  <li>{eachHouse.amenities}</li>
                  <Link to='' target='_blank'>Floor Plan</Link>
                </ul>
              </li>
            ))
          }
        </ul>
      </article>
    );
  }
}

export default Neighborhood;