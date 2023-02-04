import React from "react";
import ContactUs from "../../ContactUs/ContactUs.tsx";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import baño1 from "../Origin1/img/baño1.jpeg";
import cocina1 from "../Origin1/img/cocina1.jpeg";
import img5 from "../Origin1/img/inicio5.jpeg";
import "./img/index.d.ts";

import "./Origin1.css";

function Origin1() {


  return (
    <div className="backgroundOrigin1">
      <Navbar />
      <div className="barraOrigin1"></div>
      <div className="titleContainerOrigin1">
        <span className="titleOrigin1"> Origin 1 </span>
      </div>
<div className="containerCarouselOrigin1Beta">

	<div className="section full-height over-hide px-4 px-sm-0">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-lg-10 col-xl-8 align-self-center padding-tb">
					<div className="section mx-auto text-center slider-height-padding">
			          	<input className="checkbox frst" type="radio" id="slide-1" name="slider" checked/>
			          	<label htmlFor="slide-1"></label>
			          	<input className="checkbox scnd" type="radio" name="slider" id="slider-2" checked/>
			          	<label htmlFor="slider-2"></label>
			          	<input className="checkbox thrd" type="radio" name="slider" checked id="slider-3"/>
			          	<label htmlFor="slider-3"></label>
			          	<input className="checkbox foth" type="radio" name="slider" checked id="slider-4"/>
			          	<label htmlFor="slider-4"></label>
						<ul className="ulOrigin1">
							<li>
								<span></span>
						    </li>
							<li>
								<span></span>
						    </li>
							<li>
								<span></span>
						    </li>
							<li>
								<span></span>
						    </li>
					    </ul>
  

				    </div>
			    </div>
	      	</div>
	    </div>
	</div>

    <div className="textOrigin1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</div>

      <section className="StyledSlider2">
        <img className="imgTest2" src={cocina1} alt="" />
        <img className="imgTest2" src={baño1} alt="" />
        <img className="imgTest2" src={img5} alt="" />
       
      </section>
    </div>
    
  
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Origin1;
