// <<<<<<< main
import "../styles/OurStory.css";

import React from 'react';
import myImage from '../img-folder/craft-maker.jpeg';


// =======
import "../styles/ourStory.css"
// >>>>>>> main

function OurStory() {
  return (
    <>
  <div className="our-story-first-section">
    <div className="container">
      <div className="content-first">
        <div className="infos">
          <h3 className="title_name_01">A social enterprise. An authentic platform for pure craft.</h3>
        </div>
        <div className="infos">
          <div className="line-right">
            <div className="line-01"></div>
          </div>
          <p className="description_data">
            The India Craft House is a digital platform for some of the world’s oldest and most intricate craft forms. We started this social enterprise close to 10 years ago in order to preserve, showcase and share the talent of India’s artisans with the world. We hope to be able to raise the dignity of the Indian artisan in our own way and kindle an interest and support for an unsurpassed legacy of craft that spans millennia and spreads across the length and breadth of the land. It is our effort to curate an undeniably unique selection of traditional art and craft translated into a range of beautiful, contemporary products.
          </p>
        </div>
      </div>
    </div>
  </div>

<div className="our-story-second-section">
    <div className="second-section-container">
      <div className="content-data">
        <div className="second-section-infos">
          <div className="heading_and_desc">
            <div className="second-section-line-01"></div>
            <h3 className="second-section-title_name_01">Established in 2010, Gurgaon, India.</h3>
            <p className="second-section-description_data">We are headquartered in Gurgaon, India near the capital city of New Delhi. Our objective has always been to empower our artisans to deliver sustainable products of the finest quality. We devote ourselves to these causes. Each of our products are handcrafted and unique. Each product tells the unique story of the artisan who made it.</p>
          </div>
        </div>
        <div className="second-section-infos1">
          <div className="img_data">

             <img src={myImage}alt="my image" />          
         
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="our-story-third-section">
    <div className="third-section-container">
      <div className="third-section-content-infos">
        <h3 className="third-section-title_name_01" > Celebrating a heritage. Home to some of the world’s oldest craft forms.</h3>

        <p className ="third-section-description_data">With a legacy of craft that spans millennia and some of the forms dating as far back as to the era of the Indus Valley civilisation, the fantastic world of India’ crafts people remains unsurpassed in its beauty and extent. “Craftsmanship in India comes naturally to hundreds of thousands of its unlettered people who weave myths, legends and simple daily experiences into different forms of creativity that can change shape from day to day, yet maintain their consistency for centuries to enrich their lives. There are many different worlds contained within the geographical boundaries of India. The world of its craftspeople, with their hand made goods and textiles, spans millennia and spreads across the length and breadth of the land. To hundreds and thousands of Indian artisans, fusion of utility and aesthetics comes naturally”</p>
      </div>
    </div>
  </div>
  
      
    </>
  );
}

export default OurStory;
