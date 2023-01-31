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
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing First Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Second Title that is Quite Long</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Forth Title that is Quite Long</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing Fifth Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio&hellip;</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div className="news-card">
    <a href="#" className="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image"/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">Amazing 6<sup>th</sup> Title</h2>
      <div className="news-card__post-date">Jan 29, 2018</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
        <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

</div>
{/* ----------------------------------------------------------------------------------------------------------------------> */}

<div className='position' >
<div className="carousel-wrapperHome">
  <div className="carousel-containerHome">
    <div className="carousel2">
      <div className="image-one"></div>
      <div className="image-two"></div>
      <div className="image-three"></div>
    </div>
  </div>
</div>
<div className="carousel-wrapperHome">
  <div className="carousel-containerHome">
    <div className="carousel2">
      <div className="image-one"></div>
      <div className="image-two"></div>
      <div className="image-three"></div>
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
