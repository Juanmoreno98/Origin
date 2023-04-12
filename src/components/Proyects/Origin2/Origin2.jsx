import React, { useState } from "react";
import ContactUs from "../../ContactUs/ContactUs.tsx";
import Footer from "../../Footer/Footer.tsx";
import Navbar from "../../Navbar/Navbar";
import p from "../../icons/p.png";
import trash from "../../icons/trash.png";
import terraza from "../../icons/terraza.png";
import people from "../../icons/people.png";
import style from "./style.module.css";
import car from "../../icons/car.png";
import reception from "../../icons/reception.png";
import timeline from "../../assets/timeline.png";
import img1 from "../../../img/OriginII/stage_1.jpg";
import img2 from "../../../img/OriginII/stage_2.jpg";
import img3 from "../../../img/OriginII/stage_3.jpg";
import img4 from "../../../img/OriginII/stage_4.jpg";
import img5 from "../../../img/OriginII/stage_5.jpg";
import img6 from "../../../img/OriginII/stage_6.jpg";
import img7 from "../../../img/OriginII/stage_7.jpg";
import img8 from "../../../img/OriginII/stage_8.jpg";
import img9 from "../../../img/Apto_Tipo3.JPG";
import img10 from "../../../img/Apto_Tipo4.JPG";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { BsArrowsAngleContract } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import img1Slider from "../../../img/Origin2_A1.jpg";
import img2Slider from "../../../img/Origin2_A2.jpg";
import img3Slider from "../../../img/Origin2_A3.jpg";
import img4Slider from "../../../img/Origin2_A4.jpg";
import img5Slider from "../../../img/Origin2_A5.jpg";
import img6Slider from "../../../img/Origin2_A6.jpg";
import img7Slider from "../../../img/Origin2_A7.jpg";
import img8Slider from "../../../img/Origin2_A8.jpg";
import infoTable from "../../../img/info_table.png";

function Origin2() {
  return (
    <div>
      <Navbar />

      <div className={style.introduction}>
        <div className={style.titleInformation}>
          <div className={style.principalTitle}>
            <h1>ORIGIN II</h1>
          </div>
          <div className={style.infoTable}>
            <img src={infoTable} alt="" />
          </div>
        </div>
        <div className={style.sectionHome}>
          <div>
            <div className={style.carouselHome}>
              <input type="radio" name="slides" id="slide-1" />
              <input type="radio" name="slides" id="slide-2" />
              <input type="radio" name="slides" id="slide-3" />
              <input type="radio" name="slides" id="slide-4" />
              <input type="radio" name="slides" id="slide-5" />
              <input type="radio" name="slides" id="slide-6" />
              <input type="radio" name="slides" id="slide-7" />
              <input type="radio" name="slides" id="slide-8" />
              <ul className={style.carousel__slides}>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img1Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img2Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img3Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img4Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img5Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img6Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img7Slider} alt="" />
                    </div>
                  </figure>
                </li>
                <li className={style.carousel__slide}>
                  <figure>
                    <div>
                      <img src={img8Slider} alt="" />
                    </div>
                  </figure>
                </li>
              </ul>
              <ul className={style.carousel__thumbnails}>
                <li>
                  <label htmlFor="slide-1">
                    <img src={img1Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-2">
                    <img src={img2Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-3">
                    <img src={img3Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-4">
                    <img src={img4Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-5">
                    <img src={img5Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-6">
                    <img src={img6Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-7">
                    <img src={img7Slider} alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-8">
                    <img src={img8Slider} alt="" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={style.ubicacion}>
        <h1 className={style.titleUbicacion}>UBICACION </h1>
        <div className={style.map}>
          <iframe
            className={style.dimesionMap}
            src="https://www.google.com/maps/d/u/0/embed?mid=12QCNxtQjslEqL8C4n_7foaQHWkVCLNk&ehbc=2E312F"
          ></iframe>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.titleEspaciosDisp}>ESPACIOS DISPONIBLES </div>
        <div className={style.iconsGrid}>
          <div className={style.itemIcon}>
            <img className={style.icon} src={p} alt="" />
            <div className={style.iconsText}>PARQUEADEROS COMUNALES</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src={reception} alt="" />
            <div className={style.iconsText}>RECEPCION</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src={people} alt="" />
            <div className={style.iconsText}>SALÓN COMUNAL</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src={car} alt="" />
            <div className={style.iconsText}>ELEVADOR VEHICULAR</div>
          </div>
        </div>

        <div className={style.iconsGrid2}>
          <div className={style.itemIcon}>
            <img className={style.icon} src={terraza} alt="" />
            <div className={style.iconsText}>TERRAZA</div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src={people} alt="" />
            <div className={style.iconsText}>ZONA BBQ </div>
          </div>

          <div className={style.itemIcon}>
            <img className={style.icon} src={trash} alt="" />
            <div className={style.iconsText}>SHUT DE BASURAS</div>
          </div>
        </div>
      </div>

      <div className={style.timeline}>
        <img src={timeline} alt="timeline" />
      </div>

      <div className={style.carouselWrapperBuildings}>
        <div className={style.carouselContainerBuildings}>
          <div className={style.carouselBuildings}>
            <div className={style.imageOne}></div>
            <div className={style.imageTwo}></div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Origin2;
