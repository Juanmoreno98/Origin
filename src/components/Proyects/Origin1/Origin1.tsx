import React from "react";
import ContactUs from "../../ContactUs/ContactUs.tsx";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import baño1 from "../Origin1/img/baño1.jpeg";
import cocina1 from "../Origin1/img/cocina1.jpeg";
import img5 from "../Origin1/img/inicio5.jpeg";
import "./img/index.d.ts";
import imgCarousel1 from "../../../img/aeropuerto_el_dorado.jpg"
import imgCarousel2 from "../../../img/Clinica_Santa_Maria_Del_Lago.jpg"
import imgCarousel3 from "../../../img/equipoTrabajo3.jpeg"
import "./Origin1.css";

function Origin1() {


	return (
		<div className="backgroundOrigin1">
		  <Navbar />
		  <div className="barraOrigin1">  <span className="titleOrigin1"> ORIGIN 1 </span></div>
	<p className="originBackBar"></p>
		  <div className="containerCarouselOrigin2Beta">
			<div>
			  <div className="container3">
				<div className="row full-height justify-content-center">
				  <div className="ColumnsCarouselOrigin2">
					<div className="section mx-auto text-center slider-height-padding">
					  <input
						className="checkbox frst"
						type="radio"
						id="slide-1"
						name="slider"
						checked
					  />
					  <label htmlFor="slide-1"></label>
					  <input
						className="checkbox scnd"
						type="radio"
						name="slider"
						id="slider-2"
						checked
					  />
					  <label htmlFor="slider-2"></label>
					  <input
						className="checkbox thrd"
						type="radio"
						name="slider"
						checked
						id="slider-3"
					  />
					  <label htmlFor="slider-3"></label>
					  <input
						className="checkbox foth"
						type="radio"
						name="slider"
						checked
						id="slider-4"
					  />
					  <label htmlFor="slider-4"></label>
					  <ul className="ulOrigin2">
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
	
			<div className="textOrigin1">
			  Lorem Ipsum is simply dummy text of the printing and typesetting
			  industry. Lorem Ipsum has been the industry's standard dummy text ever
			  since the 1500s, when an unknown printer took a galley of type and
			  scrambled it to make a type specimen book. It has survived not only
			  five centuries, but also the leap into electronic typesetting,
			  remaining essentially unchanged. It was popularised in the 1960s with
			  the release of Letraset sheets containing ince the 1500s, when an unknown printer took a galley of type and
			  scrambled it to make a type specimen book. It has survived not only
			  five centuries, but also the leap into electronic typesetting,
			  remaining essentially unchanged. It was popularised in the 1960s with
			
			</div>
			<ul id="body">
			  <input type="radio" name="radio-btn" id="img-1" checked />
			  <li id="img-container">
				<div id="img-inner">
				  <img src={imgCarousel1} alt="" />
				</div>
				<label htmlFor="img-6" className="sb-bignav" title="Previous">&#x2039;</label>
				<label htmlFor="img-2" className="sb-bignav" title="Next">&#x203a;</label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-2" checked />
			  <li id="img-container">
				<div id="img-inner">
				  <img src={imgCarousel2} alt="" />
				</div>
				<label htmlFor="img-1" className="sb-bignav" title="Previous">&#x2039;</label>
				<label htmlFor="img-3" className="sb-bignav" title="Next">&#x203a;</label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-3" checked />
			  <li id="img-container">
				<div id="img-inner">
				  <img src={imgCarousel3} alt="" />
				</div>
				<label htmlFor="img-2" className="sb-bignav" title="Previous">&#x2039;</label>
				<label htmlFor="img-4" className="sb-bignav" title="Next">&#x203a;</label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-4" checked />
			  <li id="img-container">
				<div id="img-inner">
				  <img src={imgCarousel1} alt=""/>
				</div>
				<label htmlFor="img-3" className="sb-bignav" title="Previous">&#x2039;</label>
				<label htmlFor="img-5" className="sb-bignav" title="Next">&#x203a;</label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-5" checked />
			  <li id="img-container">
				<div id="img-inner">
				  <img src={imgCarousel2} alt="" />
				</div>
				<label htmlFor="img-4" className="sb-bignav" title="Previous">&#x2039;</label>
				<label htmlFor="img-6" className="sb-bignav" title="Next">&#x203a;</label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-6" checked />
			  <li id="img-container">
				<div id="img-inner">
				  <img src={imgCarousel3} alt=""/>
				</div>
				<label htmlFor="img-5" className="sb-bignav" title="Previous">&#x2039;</label>
				<label htmlFor="img-1" className="sb-bignav" title="Next">&#x203a;</label>
			  </li>
			</ul>
	
	
	
	
		  </div>
		  <section className="StyledSlider2">
			<img className="imgTest2" src={cocina1} alt="" />
			<img className="imgTest2" src={baño1} alt="" />
			<img className="imgTest2" src={img5} alt="" />
			<img className="imgTest2" src={cocina1} alt="" />
			<img className="imgTest2" src={cocina1} alt="" />
	
		 
		  
	
		  </section>
		  <div>
			<div className="Origin1MapContainer">
			  <iframe
				title="asd"
				src="https://www.google.com/maps/d/u/0/embed?mid=1yPnBiOknFjvaQkr-CWxPfiSFAa9ARKo&ehbc=2E312F"
				className="Origin1Mapfullscreen"
			  ></iframe>
			  <div>
				<small className="smallOrigin2"></small>
			  </div>
			  <style>#gmap_canvas img</style>
			</div>
			<br />
		  </div>
		  <ContactUs />
		  <Footer />
		</div>
	  );
}

export default Origin1;
