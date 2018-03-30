import React from 'react';

class FloorPlan extends React.Component {
  componentDidMount() {
    let article = document.querySelector('#floor-plan');

    // mattL - setTimeout is necessary to allow the page to render the article
    setTimeout(() => {
      article.classList.add('fade-in');
    }, 10);
  }

  // mattL - remove the class so it will fade-in on next selection
  componentWillUnmount() {
    let article = document.querySelector('#floor-plan');
    article.classList.remove('fade-in');
  }
  
  render() {
    let { neighborhood, house, images } = this.props;
    console.log('IMG', images);
    
    return (
      <article id='floor-plan'>
        <p>Return to {neighborhood}</p>
        <h2>{house}</h2>
        {
          images.map((eachPlan, index) =>
            <img key={index} src={eachPlan} alt={`floor-plan-${index + 1}`} />
          )
        }
      </article>
    );
  }
}

export default FloorPlan;