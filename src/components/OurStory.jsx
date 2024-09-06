
import myImage from '../img-folder/craft-maker.jpeg';

import story_img from '../img-folder/story_img.jpg';

import story1 from '../img-folder/story1.jpg';
import story3 from '../img-folder/story3.jpg';
import story5 from '../img-folder/story5.jpg';

import "../styles/ourStory.css"

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

  <div className="forth-section">
    <div className="img-container">
      <img src={story_img} alt="" />
    </div>
  </div>
  
  <div className="fifth-section1">
    <div className="images-container1">
      <div className="left-box">
        <img src={story1} alt="my img" />
      </div>
      <div className="right-box">
        <h2 className='images-heading'>Promoting fair trade.
        Supporting the artisan.</h2>

        <p className='images-para'>Ensuring fair prices that are mutually agreed with our artisans, while providing support with ideas and help to direct their immense talent in staying contemporary and relevant to a changing world. Our cost and price models are worked out equitably between us and our artisans. Our partners and associates work tirelessly to assist artisans in increasing their skills and improving their practices through assistance with production methods, working conditions, business practices and product development. We endeavour to provide all our partners, artisans and craftsmen access to a larger marketplace and a fairer price for their products, not just by promoting what they make, but also by helping them with ideas and designs to innovate and create relevant craft products that appeal to changing tastes and modern preferences, to help them find wider markets.</p>
      </div>
    </div>

   
  </div>

  <div className="fifth-section2">
  <div className="images-container2">
      <div className="left-box2">
      <h2 className='images-heading2'>Rewarding partnerships with a deserving force.</h2>

        <p className='images-para2'>Over the years, we have cultivated relationships with over 2000 artisans directly and through our associates. Our primary mission is to empower the Indian artisan and lift up a community of people who are typically left behind. By choosing to directly support artisans, craft-based organisations and social causes, we help create a cycle of demand that nurtures hope, trust and long-term relationships. We work with artisans, craft-centric organisations, NGO's self-help groups, social enterprises and enterprises deploying craftspeople. We also seek to promote other charitable organisations engaged in socially impactful causes.</p>
      </div>
      <div className="right-box2">
      <img src={story5} alt="my img" />
       
      </div>
    </div>
  </div>

  <div className="fifth-section1">
    <div className="images-container1">
      <div className="left-box">
        <img src={story3} alt="my img" />
      </div>
      <div className="right-box">
        <h2 className='images-heading'>Promoting fair trade.
        Supporting the artisan.</h2>

        <p className='images-para'>Ensuring fair prices that are mutually agreed with our artisans, while providing support with ideas and help to direct their immense talent in staying contemporary and relevant to a changing world. Our cost and price models are worked out equitably between us and our artisans. Our partners and associates work tirelessly to assist artisans in increasing their skills and improving their practices through assistance with production methods, working conditions, business practices and product development. We endeavour to provide all our partners, artisans and craftsmen access to a larger marketplace and a fairer price for their products, not just by promoting what they make, but also by helping them with ideas and designs to innovate and create relevant craft products that appeal to changing tastes and modern preferences, to help them find wider markets.</p>
      </div>
    </div>

   
  </div>
      
    </>
  );
}

export default OurStory;
