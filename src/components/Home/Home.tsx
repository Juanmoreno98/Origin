import React from "react";
import ContactUs from "../ContactUs/ContactUs.tsx";
import Footer from "../Footer/Footer.tsx";
import Navbar from "../Navbar/Navbar.jsx";
import img1 from "../../img/Tiatan_Plaza.jpg";
import imgFachada from "../../img/APTOS.png";
import imgHome from "../../img/imgHome.jpg";
import APTOS from "../../img/APTOS.png";
import APTOS2 from "../../img/FACH2.png";

import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="barra3"></div>
      
      <div className="positionHome">
        <div className="ft-recipe">
          <div className="ft-recipe__thumb">
            <span id="close-modal">
              <i className="ion ion-md-close"></i>
            </span>
            {/* <h3>Origin Holdings S.A.S</h3> */}
            <img className="imgHome" src={imgHome} alt="Strawberry Waffle" />
          </div>
          <div className="ft-recipe__content">
            <header className="content__header">
              <div className="row-wrapper">
                <h2 className="recipe-title">Origin Holdings S.A.S</h2>
                <div className="user-rating"></div>
              </div>
              {/* <ul className="recipe-details">
                <li className="recipe-details-item time">
                  <i className="ion ion-ios-clock-outline"></i>
                  <span className="value">2016</span>
                  <span className="title"> !Desde!</span>
                </li>
                <li className="recipe-details-item ingredients">
                  <i className="ion ion-ios-book-outline"></i>
                  <span className="value">3</span>
                  <span className="title">Proyectos</span>
                </li>
                <li className="recipe-details-item servings">
                  <i className="ion ion-ios-person-outline"></i>
                  <span className="value">3</span>
                  <span className="title">Estrato</span>
                </li>
              </ul> */}
            </header>
            <p className="description">
             Nit. 9007589604 es una empresa privada dedicada a la construcción de inmuebles y prestación de servicios inmobiliarios como son venta, arriendo y adecuación de inmuebles. Surgió bajo una iniciativa de emprendimiento familiar que pretende brindar condiciones optimas de vivienda para población de estratos medios, en donde prime la calidad, el buen gusto y costos asequibles que les permita a los compradores acceso a una vivienda digna ubicada en excelentes sectores de la ciudad.
            </p>
            <footer className="content__footer">
              <a href="#">Mas Sobre Nosotros</a>
            </footer>
          </div>
        </div>
        
        <title>Recipe Card Food</title>
        <div className="bodyHomePrueba">
          <div className="container">
            <img src={APTOS2} alt="FachacdaOrigin3 " />
            <div className="container__text">
              <h1>Conoce Nuestro Nuevo Proyecto</h1>
              <div className="container__text__star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
              <p>
                <h4>Edificio Origin III</h4>
                <hr />
                Es un proyecto de apartamentos y aparta estudios ubicado en el Barrio Soledad Norte en la localidad de Engativá (Bogota)
              </p>
              {/* <div className="container__text__timing">
                <div className="container__text__timing_time">
                  <h2>Pisos</h2>
                  <p>5</p>
                </div>
                <div className="container__text__timing_time">
                  <h2>Localidad</h2>
                  <p>Puente Aranda</p>
                </div>
                <div className="container__text__timing_time">
                  <h2>Apartamentos Tipo</h2>
                  <p>5</p>
                  </div>
                </div> */}
              <button className="btn">
                Ver Mas... <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
                <div className="constructor">
                  <h2 className="slideTitle">Sitios De Interes</h2>
                  <hr />
                </div>
        </div>


        
          <div className="containerHome2">
            <div className="carouselHome2">
              <input type="radio" name="slides" id="slide-1" />
              <input type="radio" name="slides" id="slide-2" />
              <input type="radio" name="slides" id="slide-3" />
              <input type="radio" name="slides" id="slide-4" />
              <input type="radio" name="slides" id="slide-5" />
              <input type="radio" name="slides" id="slide-6" />
              <ul className="carousel__slides2">
                <li className="carousel__slide2">
                  <figure>
                    <div>
                      <img src={img1} alt="" />
                    </div>
                    <figcaption>
                    Edificio Origin III se localiza al noroccidente de la Ciudad De Bogota, excelente ubicación y  en un sector de fácil acceso rodeado por importantes vías como son la Avenida Ciudad de Cali, Calle 80, Av. Boyacá y la Calle 72.
                      <h4>
                    <hr />
                        Centro Comercial Titan Plaza
                      </h4>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide2">
                  <figure>
                    <div>
                      <img src={img1} alt="" />
                    </div>
                    <figcaption>
                      Cuentas con la suerte de relajarte a pocos minutos en el
                      Humedal Santa María del Lago 2.4 Km - 8 Min
                      <span className="credit2">
                        Parque Santa Maria Del Lago
                      </span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide2">
                  <figure>
                    <div>
                      <img src={img1} alt="" />
                    </div>
                    <figcaption>
                      Al interior de Soledad Norte se encuentran 54 paraderos
                      del SITP, ubicados principalmente sobre la Avenida Ciudad
                      de Cali y la calle 72.
                      <span className="credit2">Estacion Avenida De Cali</span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide2">
                  <figure>
                    <div>
                      <img src={img1} alt="" />
                    </div>
                    <figcaption>
                      Su ubicación cuenta con el beneficio de estar a 5.0 km -
                      17 min del aeropuerto internacional El Dorado.
                      <span className="credit2">
                        Aeropuerto Internacional El Dorado
                      </span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide2">
                  <figure>
                    <div>
                      <img src={img1} alt="" />
                    </div>
                    <figcaption>
                      Para el entretenimiento y comercio se encuentra uno de los
                      mejores y más completos centros comerciales a 3.2 Km – 8
                      Min.
                      <span className="credit2">
                        Centro Comercial Titan Plaza
                      </span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide2">
                  <figure>
                    <div>
                      <img src={img1} alt="" />
                    </div>
                    <figcaption>
                      Su salud y bienestar también es importante para nosotros
                      por eso el sector cuenta con una clínica a 1.9 Km – 8 Min
                      <span className="credit2">
                        Clínica Infantil Sta. María del Lago
                      </span>
                    </figcaption>
                  </figure>
                </li>
              </ul>
              <ul className="carousel__thumbnails2">
                <li>
                  <label htmlFor="slide-1">
                    <img src={img1} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-2">
                    <img src={img1} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-3">
                    <img src={img1} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-4">
                    <img src={img1} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-5">
                    <img src={img1} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-6">
                    <img src={img1} alt="" />
                  </label>
                </li>
              </ul>
            </div>
        

        {/* <div className="prueba">
          <img className="imgprueba" src={imgFachada} alt="" />
          <h1 className="titulo3">ORIGIN III</h1>
        </div> */}
      </div>
      </div>

      <div className="section2">
        <div className="contentTitleSec2" >
          <h1>Proyectos Desarrollados</h1>
        </div>
        <div className="carousel-wrapperHome9">
          <div className="carousel-containerHome9">
            <div className="carousel29">
              <div className="image-one1"></div>
              <div className="image-two1"></div>
              <div className="image-three1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3" >
        <div className="section3a">
        <div className="bodyHomePrueba">
          <div className="containerSection3">
            <img src={APTOS2} alt="FachacdaOrigin3 " />
            <div className="container__text2">
              <h1>ORIGIN I</h1>
              <hr />
              <button className="btn2">
                Ver Mas... <i className="fa fa-arrow-right2"></i>
              </button>
            </div>
          </div>

       </div>

       <div className="bodyHomePrueba">
          <div className="containerSection3">
            <img src={APTOS2} alt="FachacdaOrigin3 " />
            <div className="container__text2">
              <h1>ORIGIN II</h1>
              <hr />
              <button className="btn2">
                Ver Mas... <i className="fa fa-arrow-right2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="constructor2">

      </div> */}

      {/* <div className="position">
        <div className="carousel-wrapperHome9">
          <div className="carousel-containerHome9">
            <div className="carousel29">
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
      </div> */}

      <Footer />
      <ContactUs />
    </div>
  );
}

export default Home;
