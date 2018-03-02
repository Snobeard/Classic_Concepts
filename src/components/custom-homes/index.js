import React from 'react';

class CustomHome extends React.Component {
  componentDidMount() {
    let article = document.querySelector('#custom-homes');

    // mattL - setTimeout is necessary to allow the page to render the article
    setTimeout(() => {
      article.classList.add('fade-in');
    }, 10);

    let navLink = document.querySelector('#navigation .custom-homes a');
    navLink.classList.add('active');
  }

  // mattL - remove the class so it will fade-in on next selection
  componentWillUnmount() {
    let article = document.querySelector('#custom-homes');
    article.classList.remove('fade-in');

    let navLink = document.querySelector('#navigation .custom-homes a');
    navLink.classList.remove('active');
  }
  
  render() {
    return (
      <article id='custom-homes'>
        <h1>Custom Home Program</h1>

        <section className='fixed-price'>
          <h4>Fixed Price Program</h4>
          <p>{`Use one of our basic permitted home plans with selected Classic upgrades for a fixed price.  If you choose the Fixed Price Program the contract price will be based on a non-changed Classic Concepts home now being offered in our neighborhoods, to include only upgrades currently offered by Classic Concepts. This program differs from our Pre-Sale Program in regards to financing.`}</p>
        </section>

        <section className='cost-plus'>
          <h4>Cost Plus Program</h4>
          <p>{`Use one of our custom Classic home plans with upgrades and changes or have our staff help you develop your own custom plans.  The Cost Plus Program allows you to customize your home during the pre-construction period. It also allows you to make changes during construction and to have a larger selection of upgrades. Any changes or extra costs incurred during construction / delays, etc. will be your financial responsibility.`}</p>
        </section>

        <section className='financing'>
          <h4>Financing</h4>
          <p>{`You will be financing your new home with a custom construction loan whether you choose our Fixed Price Program or our Cost Plus Program. Bring a pre-approved letter from your lender to your builder meeting.`}</p>
        </section>

        <section className='conditions'>
          <h4>Conditions</h4>
          <p>{`Your lot must be within a 5 mile radius of a Classic Concepts neighborhood that is currently under construction. Classic Concepts prides themselves on close attention to details. This involves having a superintendent on-site daily. Costs go up significantly if we can't use one of our superintendents to supervise your new home.

          Your lot must be ready to build on prior to a price being agreed upon. If you choose a Fixed Price Program – Time is Money – If your lot is outside an area we have existing basic permits for, it could take months to get a permit. Or if your lot is subject to a septic permit it could take even longer. If either is the case the Cost Plus Program may be the best program for your new home.`}</p>
        </section>
      </article>
    );
  }
}

export default CustomHome;