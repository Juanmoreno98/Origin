import React from "react";
import ContactUs from "../ContactUs/ContactUs.tsx";
import Footer from "../Footer/Footer.tsx";
import Navbar from "../Navbar/Navbar.jsx";
// import titanPlaza from "../../img/Tiatan_Plaza.jpg";
import titanPlaza from "../../img/titan2.jpg";
import lago from "../../img/Santa_maria_del_lago.jpeg";
import trasmi from "../../img/Estacion_Avenida_Cali.jpg";
import puentearanda from "../../img/Loclidad Puente Aranda.avif";
import imgFachada from "../../img/Fachada3_Origin3.jpg";
import imgHome from "../../img/imgHome.jpg";
import APTOS2 from "../../img/FACH2.png";
import FachadaFinal from "../../img/FACHADA FRONTAL.png";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ApartmentIcon from "../../img/IconEdificio.png";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="barra3"></div>

      <div className="positionHome">
        <div className="ft-recipe">
          <div className="ft-recipe__thumb">
            <div className="slider">
              <ul>
                <li>
                  <img src={imgHome} alt="fachadaOrigin2" />
                </li>
                <li>
                  <img src={imgFachada} alt="fachadaOrigin2" />
                </li>
              </ul>
            </div>
          </div>
          <div className="ft-recipe__content">
            <header className="content__header">
              <div className="row-wrapper">
                <h2 className="recipe-title">Origin Holdings S.A.S</h2>
                <div className="user-rating"></div>
              </div>
            </header>
            <p className="description">
              Nit. 9007589604
              <br />
              Somos una empresa privada dedicada a la construcción de inmuebles
              y prestación de servicios inmobiliarios como son venta, arriendo y
              adecuación de inmuebles. Surgió bajo una iniciativa de
              emprendimiento familiar que pretende brindar viviendas con
              condiciones óptimas en estratos medios, donde prima la calidad, el
              buen gusto y costos asequibles en excelentes sectores de la
              ciudad.
            </p>
            <div className="buttonNosotrosPosition">
              <button className="buttonNosotros">
                Nosotros{" "}
                <PeopleOutlineOutlinedIcon
                  sx={{ mb: -1 }}
                  className="iconB"
                ></PeopleOutlineOutlinedIcon>
              </button>
            </div>
          </div>
        </div>

        <title>Nosotros</title>
        <div className="container">
          <div className="container__text">
            <h1>Conoce nuestro nuevo proyecto</h1>
            <div className="positionContainer">
              <img src={FachadaFinal} alt="FachacdaOrigin3 " />
              <p>
                <h4>Edificio Origin III</h4>
                Es un proyecto de apartamentos y apartaestudios desde 23.3m2
                hasta 61.7m2 de área privada. <br />
                <b>Dirección:</b> Calle 77a #83-31/39 <br />
                <b>Barrio:</b> Soledad Norte
                <br />
                <b>Localidad:</b> Engativá (Bogotá)
              </p>
            </div>
            <button className="btn">Ver Mas</button>
          </div>
        </div>
        {/*  SLIDERS DE UBICACIONES OCULTO --------------------------->
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
                    Edificio Origin III se localiza al noroccidente de la Ciudad
                    De Bogota, excelente ubicación y en un sector de fácil
                    acceso rodeado por importantes vías como son la Avenida
                    Ciudad de Cali, Calle 80, Av. Boyacá y la Calle 72.
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
                    <span className="credit2">Parque Santa Maria Del Lago</span>
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide2">
                <figure>
                  <div>
                    <img src={img1} alt="" />
                  </div>
                  <figcaption>
                    Al interior de Soledad Norte se encuentran 54 paraderos del
                    SITP, ubicados principalmente sobre la Avenida Ciudad de
                    Cali y la calle 72.
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
                    Su ubicación cuenta con el beneficio de estar a 5.0 km - 17
                    min del aeropuerto internacional El Dorado.
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
                    Su salud y bienestar también es importante para nosotros por
                    eso el sector cuenta con una clínica a 1.9 Km – 8 Min
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
        </div> */}
      </div>

      <div className="positionCarouselAuto">
        <div className="contentCarousel">
          <p>
            <b>Edificio Origin III</b> se localiza al noroccidente de la Ciudad
            De Bogotá, excelente ubicación y en un sector de fácil acceso
            rodeado por importantes vías como:
          </p>
          <ul>
            <li>La Avenida Ciudad de Cali</li>
            <li>Calle 80</li>
            <li>Av. Boyacá</li>
            <li>Calle 72.</li>
          </ul>
        </div>
        <div className="slider2">
          <ul>
            <li>
              <img src={titanPlaza} alt={"img"} />
            </li>
            <li>
              <img src={trasmi} alt={"img"} />
            </li>
            <li>
              <img src={puentearanda} alt={"img"} />
            </li>
            <li>
              <img src={lago} alt={"img"} />
            </li>
          </ul>
        </div>
      </div>

      <div className="dividerBlue">
        <h1>CONOCE NUESTROS</h1>
      </div>

      <div className="titleProyects">
        <h1>PROYECTOS</h1>
        <img src={ApartmentIcon} alt="icon" />
      </div>

      <div className="allProjects">
        <div className="imagesProjects">
          <hr />
          <hr className="hrYellow" />
          <img src={imgFachada} alt="" />
          <h1>ORIGIN I</h1>
        </div>
        <div className="imagesProjects">
          <img src={imgHome} alt="" />
          <h1>ORIGIN II</h1>
          <hr className="hrblue" />
        </div>
        <div className="imagesProjects">
          <hr className="hrYellow" />
          <img src={APTOS2} alt="" />
          <h1>
            {" "}
            ORIGIN III <p>(En proceso)</p>
          </h1>
        </div>
      </div>

      <div className="decoration">
        <div className="decoration2"></div>
      </div>

      <Footer />
      <ContactUs />
    </div>
  );
}

export default Home;
