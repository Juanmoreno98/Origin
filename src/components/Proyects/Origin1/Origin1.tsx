import React from "react";
import ContactUs from "../../ContactUs/ContactUs.tsx";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import baño1 from "../Origin1/img/baño1.jpeg";
import cocina1 from "../Origin1/img/cocina1.jpeg";
import img5 from "../Origin1/img/inicio5.jpeg";
import "./img/index.d.ts";
import imgCarousel1 from "../../../img/fachadaOrigin1.jpg"
import imgCarousel2 from "../../../img/Clinica_Santa_Maria_Del_Lago.jpg"
import imgCarousel3 from "../../../img/equipoTrabajo3.jpeg"
import imgCarousel4 from "../../../img/sliderfooter3.jpeg"
import imgCarousel5 from "../../../img/sliderfooter2.jpeg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./Origin1.css";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Origin1() {


	return (
		<div className="backgroundOrigin1">
		  <Navbar />
		  {/* <div className="barraOrigin1">  <span className="titleOrigin1"> ORIGIN 1 </span></div> */}

	<p className="originBackBarOrigin1"></p>
		  <div className="containerCarouselOrigin2Beta">
		<div>

		  <img className="frontBuildOrigin1" src={imgCarousel1} alt="" />
		</div>
<div className="ContainerTextOrigin1">
			<div className="textOrigin1">
			<p className="pTextOrigin1">Dirección:</p>Carrera 32 1D-33. Bogota
			&nbsp;
			&nbsp;
			&nbsp;
<p className="pTextOrigin1">Barrio:</p> La Asunción. Localidad Puente Aranda. UPZ Montes.
<p className="pTextOrigin1">Estrato:</p>{" "}3 &nbsp;&nbsp;
<p className="pTextOrigin1">Numero de Pisos: </p> 5
<p className="pTextOrigin1">Numero de Apartamentos:</p> 8 (2 por piso). 50 mt2 c/u aprox.
<p className="pTextOrigin1">Parqueaderos Comunales, recepción, salón comunal, Terraza</p>
<p className="pTextOrigin1">Área del lote:</p> &nbsp;150 mt2 (10*15mts)

			  
			
			</div>
			</div>
			<div>
			<div className="bodyOrigin1Title">
          <div className="containerOrigin1">
          
            <div className="container__textOrigin1">
              <h1>ORIGIN 1</h1>

            </div>
          </div>
        </div>
				<ul id="body-Origin1" className="ulOrigin1">
			  <input type="radio" name="radio-btn" id="img-1" checked />
			  <li id="img-container" className="liOrigin1">
				<div id="img-innerOrigin1">
				  <img src={imgCarousel1} alt="" />
				</div>
				<label htmlFor="img-6" className="sb-bignavorigin1" title="Previous"><ArrowBackIosIcon/></label>
				<label htmlFor="img-2" className="sb-bignavorigin1" title="Next"><ArrowForwardIosIcon/></label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-2" checked />
			  <li id="img-container" className="liOrigin1">
				<div id="img-innerOrigin1">
				  <img src={imgCarousel2} alt="" />
				</div>
				<label htmlFor="img-1" className="sb-bignavorigin1" title="Previous"><ArrowBackIosIcon/></label>
				<label htmlFor="img-3" className="sb-bignavorigin1" title="Next"><ArrowForwardIosIcon/></label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-3" checked />
			  <li id="img-container" className="liOrigin1">
				<div id="img-innerOrigin1">
				  <img src={imgCarousel3} alt="" />
				</div>
				<label htmlFor="img-2" className="sb-bignavorigin1" title="Previous"><ArrowBackIosIcon/></label>
				<label htmlFor="img-4" className="sb-bignavorigin1" title="Next"><ArrowForwardIosIcon/></label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-4" checked />
			  <li id="img-container" className="liOrigin1">
				<div id="img-innerOrigin1">
				  <img src={imgCarousel4} alt=""/>
				</div>
				<label htmlFor="img-3" className="sb-bignavorigin1" title="Previous"><ArrowBackIosIcon/></label>
				<label htmlFor="img-5" className="sb-bignavorigin1" title="Next"><ArrowForwardIosIcon/></label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-5" checked />
			  <li id="img-container" className="liOrigin1">
				<div id="img-innerOrigin1">
				  <img src={img5} alt="" />
				</div>
				<label htmlFor="img-4" className="sb-bignavorigin1" title="Previous"><ArrowBackIosIcon/></label>
				<label htmlFor="img-6" className="sb-bignavorigin1" title="Next"><ArrowForwardIosIcon/></label>
			  </li>
	
			  <input type="radio" name="radio-btn" id="img-6" checked />
			  <li id="img-container" className="liOrigin1">
				<div id="img-innerOrigin1">
				  <img src={imgCarousel5} alt=""/>
				</div>
				<label htmlFor="img-5" className="sb-bignavorigin1" title="Previous"><ArrowBackIosIcon/></label>
				<label htmlFor="img-7" className="sb-bignavorigin1" title="Next"><ArrowForwardIosIcon/></label>
			  </li>

				<input type="radio" name="radio-btn" id="img-7" checked />
			  <li id="img-container" className="liOrigin1">
				<div id="img-innerOrigin1">
				  <img src={cocina1} alt=""/>
				</div>
				<label htmlFor="img-6" className="sb-bignavorigin1" title="Previous"><ArrowBackIosIcon/></label>
				<label htmlFor="img-8" className="sb-bignavorigin1" title="Next"><ArrowForwardIosIcon/></label>
			  </li>
				
				<input type="radio" name="radio-btn" id="img-8" checked />
			  <li id="img-container" className="liOrigin1">
				<div id="img-innerOrigin1">
				  <img src={baño1} alt=""/>
				</div>
				<label htmlFor="img-7" className="sb-bignavorigin1" title="Previous"><ArrowBackIosIcon/></label>
				<label htmlFor="img-1" className="sb-bignavorigin1" title="Next"> <ArrowForwardIosIcon/> </label>
			  </li>
			</ul>
			</div>
		
	
	
	
	
		  </div>
		  {/* <section className="StyledSlider2">
			<img className="imgTest2" src={cocina1} alt="" />
			<img className="imgTest2" src={baño1} alt="" />
			<img className="imgTest2" src={img5} alt="" />
			<img className="imgTest2" src={cocina1} alt="" />
			<img className="imgTest2" src={cocina1} alt="" />
	
		 
		  
	
		  </section> */}
		  <div className="GridMapGallery">
<div className="containerOr1">
<ImageList
      sx={{ width: 600, height: 450,mt:-20,ml:5 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
</div>
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
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];
export default Origin1;
