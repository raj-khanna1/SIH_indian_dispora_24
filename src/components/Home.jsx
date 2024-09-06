// <<<<<<< main
// import React from "react";
// import img1 from "./img1.webp";

import home1 from "../img-folder/home1.jpg";

import home7 from "../img-folder/home7.jpg";

import trending1 from "../img-folder/trending1.jpg";

import trending2 from "../img-folder/trending2.jpg";

import trending3 from "../img-folder/trending3.jpg";

import trending4 from "../img-folder/trending4.jpg";

import trending5 from "../img-folder/trending5.jpg";

import trending6 from "../img-folder/trending6.jpg";

import choices1 from "../img-folder/choices1.jpg";

import choices2 from "../img-folder/choices2.jpg";

import choices3 from "../img-folder/choices3.jpg";

import choices4 from "../img-folder/choices4.jpg";

import choices5 from "../img-folder/choices5.jpg";

import choices6 from "../img-folder/choices6.jpg";

import craft_img1 from "../img-folder/craft_img1.jpg";
import craft_img2 from "../img-folder/craft_img2.jpg";

import home_craft1 from "../img-folder/home_craft1.jpg";

import home_craft2 from "../img-folder/home_craft2.jpg";

import home_craft3 from "../img-folder/home_craft3.jpg";

import home_craft4 from "../img-folder/home_craft4.jpg";

import home_craft5 from "../img-folder/home_craft5.jpg";

import home_craft6 from "../img-folder/home_craft6.jpg";

import "../styles/story.css";

function Home() {
  return (
    <>
      <section className="main-section">
        <div className="main-slider-sec">
          <div className="slider-container">
            <div className="left-slider">
              <h1 className="slider-heading">Embrace the spirit of India</h1>
              <p>
                An unparalleled legacy that spans millennia. Pure, authentic
                craft sourced from artisans across the Indian sub-continent. Our
                vast collection of over 80 different craft forms celebrates a
                heritage of some of the world’s oldest handicrafts.
              </p>
              <button className="slider-button">Shop Now</button>
            </div>
            <div className="right-slider">
              <img src={home1} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-container">
          <div className="left-mission-container">
            <p className="mission-para1">Our Mission</p>

            <h2 className="mission-heading">Every purchase has a purpose</h2>

            <p className="mission-para2">
              We have direct partnerships with over 320 Indian artisans and over
              2000 indirectly. As a social enterprise that seeks to offer a
              fair-trade platform, our primary purpose is to support handicraft
              workers. With each purchase you make, you can help make a
              difference.
            </p>
          </div>

          <div className="right-mission-container">
            <div className="misson-cont">
              <h1>21+</h1>
              <p>STATES</p>
            </div>

            <div className="misson-cont1">
              <h1>21+</h1>
              <p>STATES</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trending-section">
        <div className="trending-container">
          <div className="top-section">
            <div className="trending-cont">
              <p>For this season</p>
              <h1>Trending & New</h1> <hr />
            </div>

            <div className="trending-btn">
              <button>See All</button>
            </div>
          </div>

          <div className="buttom-section">
            <div className="trending-section-grid">
              <div className="trending-grid">
                <div className="trending-grid-images">
                  <img src={trending1} alt="" />
                </div>

                <div className="trnding-grid-cont">
                  <p>Exclusive Ganjifa Art Painting - Gandaberunda,....</p>
                  <p>₹ 2,740 INR </p>
                </div>
              </div>

              <div className="trending-grid">
                <div className="trending-grid-images">
                  <img src={trending2} alt="" />
                </div>

                <div className="trnding-grid-cont">
                  <p>Dhokra Craft Curio - The Boat....</p>
                  <p>₹ 4,680 INR </p>
                </div>
              </div>

              <div className="trending-grid">
                <div className="trending-grid-images">
                  <img src={trending3} alt="" />
                </div>

                <div className="trnding-grid-cont">
                  <p>Handcrafted Wooden Engraved Tray - Green....</p>
                  <p>₹ 4,150 INR </p>
                </div>
              </div>

              <div className="trending-grid">
                <div className="trending-grid-images">
                  <img src={trending4} alt="" />
                </div>

                <div className="trnding-grid-cont">
                  <p>Handcrafted Sabai Grass Table Mats - (Set of 3)....</p>
                  <p>₹ 1,250 INR </p>
                </div>
              </div>
                <div className="trending-grid">
                  <div className="trending-grid-images">
                    <img src={trending5} alt="" />
                  </div>

                  <div className="trnding-grid-cont">
                    <p>Handwoven Elegance. Exclusive Linen Jamdani....</p>
                    <p>₹ 4,420 INR </p>
                  </div>
                </div>
             

              <div className="trending-grid">
                <div className="trending-grid-images">
                  <img src={trending6} alt="" />
                </div>

                <div className="trnding-grid-cont">
                  <p>Brass Sculpture - Swirling Lady....</p>
                  <p>₹ 9,060 INR </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <div className="explore-container">
          <div className="left-explore-box">
            <hr />

            <h1>Explore a wide selection of craft forms</h1>

            <p>Learn More</p>

            <hr />
          </div>
          <div className="right-explore-box">
            <h1>100</h1>
            <p>CRAFT FORMS</p>
          </div>
        </div>
      </section>

      <section className="choices-section">
        <div className="choices-container">
          <div className="top-section">
            <div className="choices-cont">
              <p>For Women</p>
              <h1>Choices for the season</h1> <hr />
            </div>

            <div className="choices-btn">
              <button>See All</button>
            </div>
          </div>

          <div className="choices-section-grid">
            <div className="choice-grid">
              <div className="choices-grid-images">
                <img src={choices1} alt="" />
              </div>

              <div className="choices-grid-cont">
                <p>Stunning Stripes. Handwoven Bengal Khadi....</p>
                <p>₹ 3,170 INR </p>
              </div>
            </div>
            <div className="choice-grid">
            <div className="choices-grid-images">
              <img src={choices2} alt="" />
            </div>

            <div className="choices-grid-cont">
              <p>Handwoven Elegance. Organic Kala Cotton Wra....</p>
              <p>₹ 2,760 INR </p>
            </div>
          </div>

          <div className="choice-grid">
            <div className="choices-grid-images">
              <img src={choices3} alt="" />
            </div>

            <div className="choices-grid-cont">
              <p>Handcrafted Jawaja Leather Tote Bag with Rug Patch -....</p>
              <p> 4,090 INR </p>
            </div>
          </div>

          <div className="choice-grid">
            <div className="choices-grid-images">
              <img src={choices4} alt="" />
            </div>

            <div className="choices-grid-cont">
              <p>Exclusive Bagh Hand Block Printed Cotton Saree -....</p>
              <p>₹ 3,170 INR </p>
            </div>
          </div>

          <div className="choice-grid">
            <div className="choices-grid-images">
              <img src={choices5} alt="" />
            </div>

            <div className="choices-grid-cont">
              <p>Traditional Elegance. Hand Embroidered Ilkal & Zard....</p>
              <p>₹ 3,450 INR </p>
            </div>
          </div>

          <div className="choice-grid">
            <div className="choices-grid-images">
              <img src={choices6} alt="" />
            </div>

            <div className="choices-grid-cont">
              <p>Sheer Elegance. Exclusive Handwoven Resham Silk....</p>
              <p>₹ 5,990 INR </p>
            </div>
          </div>
          </div>

          
        </div>
      </section>

      <section className="craft-img-section">
        <div className="craft-img-container">
          <img src={craft_img1} alt="" />
          <img src={craft_img2} alt="" />
        </div>
      </section>

      <section className="home-craft-section">
        <div className="home-craft-container">


        <div className="home-craft-top-section">
          <div className="home-craft-cont">
            <p className="home-craft-para">For the home</p>
            <h1>Where the heart resides</h1> <hr />
          </div>

          <div className="home-craft-btn">
            <button>See All</button>
          </div>
        </div>

        <div className="home-craft-grid">
          <div className="home-grid">
            <div className="home-craft-images">
              <img src={home_craft1} alt="" />
            </div>

            <div className="home-craft-cont">
              <p>The Shahi Collection. Exclusive, Fine Kashmiri A....</p>
              <p>₹ 4,290 INR </p>
            </div>
          </div>

          <div className="home-grid">
            <div className="home-craft-images">
              <img src={home_craft2} alt="" />
            </div>

            <div className="home-craft-cont">
              <p>Pattachitra Art Curio - Cow....</p>
              <p>₹ 5,750 INR </p>
            </div>
          </div>

          <div className="home-grid">
            <div className="home-craft-images">
              <img src={home_craft3} alt="" />
            </div>

            <div className="home-craft-cont">
              <p>Tambat Handbeaten Copper Gangal - Large....</p>
              <p>₹ 2,150 INR </p>
            </div>
          </div>

          <div className="home-grid">
            <div className="home-craft-images">
              <img src={home_craft4} alt="" />
            </div>

            <div className="home-craft-cont">
              <p>Kashida Pattu Woven Cushion Covers - Large....</p>
              <p>₹ 1,510 INR </p>
            </div>
          </div>
            <div className="home-grid">
              <div className="home-craft-images">
                <img src={home_craft6} alt="" />
              </div>

              <div className="home-craft-cont">
                <p>Gond Art Painting Large (20" x 14") - Trees, Birds....</p>
                <p>₹ 4,590 INR </p>
              </div>
            </div>
          

          <div className="home-grid">
            <div className="home-craft-images">
              <img src={home_craft5} alt="" />
            </div>

            <div className="home-craft-cont">
              <p>Delhi Blue Art Pottery Wall Plaque - Mohenjo Daro....</p>
              <p>₹ 4,290 INR </p>
            </div>
          </div>
        </div>

        </div>
        
      </section>
=======
import React from "react";
import img from "../img-folder/img1.webp";
import shop from '../components/Shop.jsx';
import "../styles/story.css"
function Home() {
  return (
    <>
        <h1 className="mt-20 text-5xl font-bold flex justify-center items-center ">
        <div className="body"><h2 className="design">Embrace the
spirit of India</h2><br/>
<h5 className="des">An unparalleled legacy that spans millennia. Pure, authentic craft sourced from artisans across the Indian sub-continent. Our vast collection of over 80 different craft forms celebrates a heritage of some of the world’s oldest handicrafts.
</h5>
<div className="mt-6 but">
           <a href={"shop"}> <button className="btn">
              shopnow
            </button></a>
         </div>
         </div>
     <img src={img} alt="" className="img"/>
    
    </h1>
    <section className="design"> 
      <h3 className="bts">Every purchase
      has a purpose</h3>
      <p>We have direct partnerships with over 320 Indian artisans and over 2000 indirectly. As a social enterprise that seeks to offer a fair-trade platform, our primary purpose is to support handicraft workers.
         With each purchase you make, you can help make a difference.</p>
    </section>
// >>>>>>> main
    </>
  );
}

export default Home;
