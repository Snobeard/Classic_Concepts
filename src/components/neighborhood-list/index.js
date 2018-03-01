import React from 'react';
import { Route, Link } from 'react-router-dom';
import neighborhoodData from '../../data/neighborhoods';
import Neighborhood from '../neighborhood';

class NeighborhoodsList extends React.Component {
  componentDidMount() {
    let article = document.querySelector('#neighborhoods');

    // mattL - setTimeout is necessary to allow the page to render the article
    setTimeout(() => {
      article.classList.add('fade-in');
    }, 10);

    let navLink = document.querySelector('#navigation .neighborhoods a');
    navLink.classList.add('active');
  }

  // mattL - remove the class so it will fade-in on next selection
  componentWillUnmount() {
    let article = document.querySelector('#neighborhoods');
    article.classList.remove('fade-in');

    let navLink = document.querySelector('#navigation .neighborhoods a');
    navLink.classList.remove('active');
  }
  
  render() {
    return (
      <article id='neighborhoods'>
        <Route exact path='/neighborhoods' render={() => (
          <h1>Current Neighborhoods</h1>
        )}/>

        {/* Setup neighborhood routes */}
        {neighborhoodData.map((eachNeighborhood, index) => {
          let { title, description, houses } = eachNeighborhood;
          let route = title.trim().toLowerCase().replace(/\s+/, '-');
          return (
            <Route key={index} path={`/neighborhoods/${route}`} render={() => <Neighborhood neighborhoodID={index + 1} title={title} description={description} houses={houses} />}
            />
          );
        })}

        <Route exact path='/neighborhoods' render={() => (
          neighborhoodData.map((eachNeighborhood, index) => {
            let { logo, title, address, subText } = eachNeighborhood;
            // mattL - format: 'Example Neighborhood' -> 'example-neighborhood'
            let route = title.trim().toLowerCase().replace(/\s+/, '-');
            return (
              <Link to ={`/neighborhoods/${route}`} id={'neighborhood-' + (index + 1)} className='neighborhood'
                key={index}>
                <React.Fragment>
                  <img src={logo} alt={`${title}'s logo`} />
                  <h4>{title}</h4>
                  <p>{address}</p>
                  <p>{subText}</p>
                </React.Fragment>
              </Link>
            );
          })
        )}/>
        
      </article>
    );
  }
}

export default NeighborhoodsList;

