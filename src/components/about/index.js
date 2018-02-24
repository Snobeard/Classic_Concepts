import React from 'react';

//TODO: add personal photos?

class About extends React.Component {
  render() {
    return (
      <section id='about'>
        <h1>About Us</h1>
        <p>
          {`
          There is a remarkable company in Seattle whose vision of "home" goes beyond bricks, mortar, lumber, and paint. It's an organization that delivers all the best the Northwest has to offer, including selectively chosen locations, well-planned neighborhoods, artistry in architecture, and a team of highly experienced professionals who take development and construction to a new level with each unique home they build. These are the cornerstones of Classic Concepts Fine Homes & Communities, Puget Sound's leading home building company.
          `}
        </p>

        <p>
          {`
          Part of the growing family of companies owned by Lakeridge Development, Classic Concepts is renowned for the beauty of its developments as well as the quality of their construction. Owners Wayne Jones and Debra Ferguson Jones have created some of the most desirable neighborhoods in the greater Seattle area, including LakeRidge at Newcastle, Daybreak, Starwood, Earlington Ridge, The Grove at Spring Lake, Maple Station, Kara on the Bluff, Honey Creek, Roses Meadow, River Ridge, and perhaps their most notable accomplishment, the Terrace at China Creek. These developments represent a variety of home styles and price ranges, yet all offer incomparable quality, craftsmanship, and value.
          `}
        </p>
        
        <p>
          {`
          With every new development, Classic Concepts refines the art of home building. Beautiful colors, inviting textures, fine materials, and attractive landscaping are standard features of every home. In addition, Classic Concepts homes can be customized with special touches to fit your particular lifestyle. So not only is a Classic Concepts home a sound investment, it's truly a homeowners dream come true. We believe that's what being a classic is all about.
          `}
        </p>
      </section>
    );
  }
}

export default About;