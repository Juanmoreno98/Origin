import React from 'react';
import Footer from '../../Footer/Footer.tsx';
import Navbar from '../../Navbar/Navbar';
import img4 from "../../../img/aeropuerto_el_dorado.jpg";
import img6 from "../../../img/Clinica_Santa_Maria_Del_Lago.jpg";
import img3 from "../../../img/Estacion_Avenida_Cali.jpg";
import img1 from "../../../img/La-Soledad-Norte.jpg";
import img2 from "../../../img/Santa_maria_del_lago.jpeg";
import img5 from "../../../img/Tiatan_Plaza.jpg";
import "./Origin1.css"

function Origin1() {
  return (
    <div>
    <Navbar/>
    <span className='titleOrigin1'> Origin 1 </span>

<div className='containerCarouselOringin1'>
<div className="carouselOrigin1">
            <input type="radio" name="slides" id="slide-1"/>
            <input type="radio" name="slides" id="slide-2"/>
            <input type="radio" name="slides" id="slide-3"/>
            <input type="radio" name="slides" id="slide-4"/>
            <input type="radio" name="slides" id="slide-5"/>
            <input type="radio" name="slides" id="slide-6"/>
            <ul className="carousel__slidesOrigin1">
                <li className="carousel__slideOrigin1">
                    <figure>
                        <div>
                            <img  src={img1} alt=""/>
                        </div>
                        <figcaption>
                        Es un sector de fácil acceso; el barrio está rodeado por importantes vías principales como la Avenida Ciudad de Cali, la calle 80 y la calle 72.
                            <span className="credit">Localidad de Puente Aranda</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slideOrigin1">
                    <figure>
                        <div>
                            <img src={img2} alt=""/>
                        </div>
                        <figcaption>
                        Cuentas con la suerte de relajarte a pocos minutos en el Humedal Santa María del Lago 2.4 Km - 8 Min
                            <span className="credit">Parque Santa Maria Del Lago</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slideOrigin1">
                    <figure>
                        <div>
                            <img src={img3} alt=""/>
                        </div>
                        <figcaption>
                        Al interior de Soledad Norte se encuentran 54 paraderos del SITP, ubicados principalmente sobre la Avenida Ciudad de Cali y la calle 72.
                            <span className="credit">Estacion Avenida De Cali</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slideOrigin1">
                    <figure>
                        <div>
                            <img src={img4} alt=""/>
                        </div>
                        <figcaption>
                        Su ubicación cuenta con el beneficio de estar a 5.0 km - 17 min del aeropuerto internacional El Dorado.
                            <span className="credit">Aeropuerto Internacional El Dorado</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slideOrigin1">
                    <figure>
                        <div>
                            <img src={img5} alt=""/>
                        </div>
                        <figcaption>
                        Para el entretenimiento y comercio se encuentra uno de los mejores y más completos centros comerciales a 3.2 Km – 8 Min.
                            <span className="credit">Centro Comercial Titan Plaza</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slideOrigin1">
                    <figure>
                        <div>
                            <img src={img6} alt=""/>
                        </div>
                        <figcaption>
                        Su salud y bienestar también es importante para nosotros por eso el sector cuenta con una clínica a 1.9 Km – 8 Min
                            <span className="credit">Clínica Infantil Sta. María del Lago</span>                            
                        </figcaption>
                    </figure>
                </li>
            </ul>    
            <ul className="carousel__thumbnails">
                <li>
                    <label htmlFor="slide-1"><img src={img1} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-2"><img src={img2} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-3"><img src={img3} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-4"><img src={img4} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-5"><img src={img5} alt=""/></label>
                </li>
                <li>
                    <label htmlFor="slide-6"><img src={img6} alt=""/></label>
                </li>
            </ul>
 
   
   
    </div>
    <section className='StyledSlider2'>

    <img className='imgTest2' src={img5} alt="" />
    <img className='imgTest2' src={img5} alt="" />

    <img className='imgTest2' src={img5} alt="" />

    </section>



</div>

<br></br>    

<section className='StyledSlider'>
    <img className='imgTest' src={img5} alt="" />
    <img className='imgTest' src={img5} alt="" />
    <img className='imgTest' src={img5} alt="" />
    <img className='imgTest' src={img5} alt="" />


    <img className='imgTest' src={img5} alt="" />
    </section>

    <br></br>
    <Footer/>
    </div>
  );
}

export default Origin1;
