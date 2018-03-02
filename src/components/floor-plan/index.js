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
    // let {} = this.props;
    console.log(this.props);
    
    return (
      <article id='floor-plan'>
        <h1>placeholder title</h1>
      </article>
    );
  }
}

export default FloorPlan;