import React from "react";
import img from "./img1.webp";
import shop from '../components/Shop.jsx';
import "../styles/Story.css"
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
    </>
  );
}

export default Home;
