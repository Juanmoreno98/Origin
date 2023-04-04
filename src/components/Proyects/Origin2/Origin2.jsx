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
  const [photo, setPhoto] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const [pictures, setPictures] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ]);
  const [x, setX] = useState(false);

  const handlePhoto = (img) => {
    setX(true);
    setPhoto(img);
  };
  const handleExpand = () => {
    if (isExpanded === true) {
      setIsExpanded(!isExpanded);
      document.exitFullscreen();
    } else {
      setIsExpanded(!isExpanded);
      document.body.requestFullscreen();
    }
  };

  const handleClose = () => {
    setX(false);
    setPhoto(null);
    setIsExpanded(false);
    document.exitFullscreen();
  };
  const handlePrev = () => {
    let filteredPicture = pictures.find((e) => e === photo);
    let index = pictures.indexOf(filteredPicture) - 1;
    let slicePictures = pictures.at(index);
    setPhoto(slicePictures);
  };
  const handleNext = () => {
    let filteredPicture = pictures.find((e) => e === photo);
    let index = pictures.indexOf(filteredPicture) + 1;
    if (index === pictures.length) {
      let slicePictures = pictures.at(0);
      setPhoto(slicePictures);
    } else {
      let slicePictures = pictures.at(index);
      setPhoto(slicePictures);
    }
  };
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

      <div className={style.prueba}>

   
      <div className={style.galleryContain}>
        <div className={style.gallery}>
          <div className={style.gridTwoPhotos}>
            <img
              onClick={() => handlePhoto(img1)}
              className={style.img1}
              src={img1}
              alt=""
            />
            <img
              onClick={() => handlePhoto(img2)}
              className={style.img1}
              src={img2}
              alt=""
            />
          </div>
             <div className={style.gridTwoPhotos2}>

          <img
            onClick={() => handlePhoto(img3)}
            className={style.img2}
            src={img3}
            alt=""
          />
          <img
            onClick={() => handlePhoto(img4)}
            className={style.img2}
            src={img4}
            alt=""
          />
            </div>
          <div className={style.gridTwoPhotos2}>
            <img
              onClick={() => handlePhoto(img5)}
              className={style.img3}
              src={img5}
              alt=""
            />
            <img
              onClick={() => handlePhoto(img6)}
              className={style.img4}
              src={img6}
              alt=""
            />
          </div>
          <div className={style.gridRowTwoPhotos}>
           
              <img
                onClick={() => handlePhoto(img7)}
                className={style.img5}
                src={img7}
                alt=""
              />
              {/* <img
                onClick={() => handlePhoto(img8)}
                className={style.img6}
                src={img8}
                alt=""
              /> */}
     
            <img
              onClick={() => handlePhoto(img8)}
              className={style.img7}
              src={img8}
              alt=""
            />
          </div>

        </div>
      </div>
      </div>
      <div>
        <div
          className={
            photo !== null ? style.backgroundOpen : style.backgroundClose
          }
        ></div>
        {x === true ? (
          isExpanded === true ? (
            <p className={style.expand} onClick={() => handleExpand()}>
              <BsArrowsAngleContract size={30} color="#000000ad" />
            </p>
          ) : (
            <p className={style.expand} onClick={() => handleExpand()}>
              <BsArrowsAngleExpand size={30} color="#000000ad" />
            </p>
          )
        ) : (
          <div></div>
        )}
        {x === true ? (
          <p className={style.x} onClick={() => handleClose()}>
            <TfiClose size={35} />
          </p>
        ) : (
          <div></div>
        )}
        {photo !== null ? (
          <div className={style.gridFullScreen}>
            <p onClick={() => handlePrev(photo)} className={style.prevBtn}>
              <SlArrowLeft size={40} color="#000000ad" />
            </p>
            <img
              className={
                isExpanded === false
                  ? style.currentImg
                  : style.currentImgExpanded
              }
              src={photo}
              alt=""
            />
            <p
              onClick={() => handleNext(photo)}
              className={
                isExpanded === true ? style.nextBtnExpand : style.nextBtn
              }
            >
              <SlArrowRight size={40} color="#000000ad" />
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
}

export default Origin2;
