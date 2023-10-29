import React from "react";
import Menu from "../componnent/MenuHome";
import SliderHomePage from "../componnent/SliderHomePage";
// import HSlidePage from "../componnent/HSlidePage";
import BlogsHomePage from "../componnent/BlogsHomePage";
import SecoundSlider from "../componnent/SecoundSlider";
import ValueHome from "../componnent/ValueHome";
import FeedbackSug from "../componnent/FeedbackSug";
import SliderFeedback from "../componnent/FeedbaceSlider";
import Footer from "../componnent/Footer";
import img1sli from "../images/s4.png";

export default function Home() {
  return (
    <div style={{display:"flex", justifyItems:"center", alignContent:"center"}}>

    <div>
       <div>
        <Menu />
      </div>
      <div style={{ height: "943px", width:"1926px" }}>
        <SliderHomePage/>
      </div>
    


      <div style={{justifyItems:"center" , height:"920px", width:'1781px'}}>
        <BlogsHomePage />
      </div>
      <hr/>


      <div >
        <SecoundSlider />
      </div>
      <hr/>
      
      
       <div style={{justifyItems:"center" , height:"1500px", width:'1851px' ,marginTop:"120px"}}>
        <ValueHome />
      </div> 


      
       <div style={{height:"700px" , width:"100%", marginTop:"225px"}}>
        <FeedbackSug />
      </div> 

      <div style={{height:"800px" , width:"1800px" }}>
        <div style={{textAlign:"center"}} >
          <h2>
            <b style={{ color: "black", fontSize: "100px" }}> TESTIMONIALS </b>{" "}
          </h2>

        </div>
        <div>

        <SliderFeedback />
        </div>

      </div>
     
      <div>
        <Footer />
      </div>
    </div>

    </div>
  );
}
