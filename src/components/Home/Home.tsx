import React from 'react';
import ContactUs from '../ContactUs/ContactUs.tsx';
import Footer from '../Footer/Footer.tsx';
import Navbar from '../Navbar/Navbar';
import img1 from "../../img/La-Soledad-Norte.jpg"
import img2 from "../../img/Santa_maria_del_lago.jpeg"
import img3 from "../../img/Estacion_Avenida_Cali.jpg"
import img4 from "../../img/aeropuerto_el_dorado.jpg"
import img5 from "../../img/Tiatan_Plaza.jpg"
import img6 from "../../img/Clinica_Santa_Maria_Del_Lago.jpg"
import TIPO1 from "../../img/Apto_Tipo1.JPG"
import TIPO2 from "../../img/Apto_Tipo2.JPG"
import TIPO3 from "../../img/Apto_Tipo3.JPG"
import TIPO4 from "../../img/Apto_Tipo4.JPG"
import TIPO5 from "../../img/Apto_Tipo5.JPG"
import APTOS from "../../img/APTOS.png"

import video from "../../film/video prueba.mp4"
import "./home.css"


function Home() {
  return (
    <div>
      <Navbar></Navbar> 
      <div className='barra'>

      </div>
      <div className='initialPosition'>
<div className='box'>

    <div className='sectionHome'>
    <div className="containerHome">
        <div className="carouselHome">
            <input type="radio" name="slides" id="slide-1"/>
            <input type="radio" name="slides" id="slide-2"/>
            <input type="radio" name="slides" id="slide-3"/>
            <input type="radio" name="slides" id="slide-4"/>
            <input type="radio" name="slides" id="slide-5"/>
            <input type="radio" name="slides" id="slide-6"/>
            <ul className="carousel__slides">
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src={img1} alt=""/>
                        </div>
                        <figcaption>
                        Es un sector de fácil acceso; el barrio está rodeado por importantes vías principales como la Avenida Ciudad de Cali, la calle 80 y la calle 72.
                            <span className="credit">Localidad de Puente Aranda</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
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
                <li className="carousel__slide">
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
                <li className="carousel__slide">
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
                <li className="carousel__slide">
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
                <li className="carousel__slide">
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
    </div>
</div>
</div>
<div className='videoHome'>
  <video width="200px" autoPlay muted playsInline controls >
    <source src={video} type="video/mp4" />
  </video>
</div>
        </div> 
{/* ------------------------------------------------------------------------------------------------------------------->>>> */}
<div className="content-wrapper">
  <div className="news-card">
    <a className="news-card__card-link"></a>
    <img src={TIPO1} alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Apartamento Tipo 1</h2>
      <div className="news-card__post-date">45.56 m2 Area Privada</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt"> Apartamentos Num: 201 - 301 - 401 - 501 <br /> 2 alcobas, sala comedor, 1 baño, cocina y área de ropas&hellip;</p>
        {/* <a className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a> */}
        <button className="news-card__read-more">Ver Mas...</button>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a className="news-card__card-link"></a>
    <img src={TIPO2} alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Apartamento Tipo 2</h2>
      <div className="news-card__post-date">61.73 m2 - Area Privada</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Apartamentos Num: 202 - 302 - 402 - 503 <br />3 alcobas, sala comedor, 2 baños, cocina, área de ropas independiente&hellip;</p>
        <a className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a className="news-card__card-link"></a>
    <img src={TIPO3} alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Apartamento Tipo 3</h2>
      <div className="news-card__post-date">45.45 m2 - Area Privada</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Apartamentos Num: 205 - 305 - 405 - 505 <br />2 alcobas, sala comedor, 1 baño, cocina y área de ropas&hellip;</p>
        <a className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a className="news-card__card-link"></a>
    <img src={TIPO4} alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Apartamento Tipo 4</h2>
      <div className="news-card__post-date">32.71 m2 - Area Privada</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Apartamentos Num: 204 - 304 - 404 - 504 <br />Aparta estudio 1 alcoba, sala comedor, 1 baño, cocina y área de ropas&hellip;</p>
        <a className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a className="news-card__card-link"></a>
    <img src={TIPO5} alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Apartamento Tipo 5</h2>
      <div className="news-card__post-date">23.31 m2 - Area Privada</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Apartamentos Num: 203 - 303 - 403 - 503 <br />Aparta estudio 1 alcoba, sala comedor, 1 baño, cocina y área de ropas&hellip;</p>
        <a className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a className="news-card__card-link"></a>
    <img src={APTOS} alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title"> Apartamentos</h2>
      <div className="news-card__post-date"> 5° Pisos - 20 APTO</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
        <a className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

</div>
{/* ----------------------------------------------------------------------------------------------------------------------> */}

<div className='position' >
<div className="carousel-wrapperHome">
  <div className="carousel-containerHome">
    <div className="carousel2">
    <div className="image-one1"></div>
      <div className="image-two1"></div>
      <div className="image-three1"></div>
    </div>
  </div>
</div>
<div className="carousel-wrapperHome">
  <div className="carousel-containerHome">
    <div className="carousel2">
    <div className="image-one2"></div>
      <div className="image-two2"></div>
      <div className="image-three2"></div>
    </div>
  </div>
</div>
</div>
<Footer/>
<ContactUs/>
</div>

  );
}

export default Home;
