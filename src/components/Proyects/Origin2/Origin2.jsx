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
import img1 from "../../../img/Clinica_Santa_Maria_Del_Lago.jpg";
import img2 from "../../../img/Apto_Tipo2.JPG";
import img3 from "../../../img/Apto_Tipo3.JPG";
import img4 from "../../../img/Apto_Tipo1.JPG";
import img5 from "../../../img/Apto_Tipo4.JPG";
import img6 from "../../../img/Apto_Tipo5.JPG";
import img7 from "../../../img/equipoTrabajo1.jpeg";
import img8 from "../../../img/equipoTrabajo2.jpeg";
import img9 from "../../../img/Estacion_Avenida_Cali.jpg";
import img10 from "../../../img/equipoTrabajo3.jpeg";
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { BsArrowsAngleContract } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';







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
    img9,
    img10,
  ]);
  const [x, setX] = useState(false);

  const handlePhoto = (img) => {
    setX(true);
    setPhoto(img);
  };
  const handleExpand = () => {
    if(isExpanded===true){
      setIsExpanded(!isExpanded)
      document.exitFullscreen();
    }else{
      setIsExpanded(!isExpanded)
      document.body.requestFullscreen();
    }
  };
  
  const handleClose = () => {
    setX(false);
    setPhoto(null);
    setIsExpanded(false)

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
            <div className={style.gridThreePhotos}>
              <img
                onClick={() => handlePhoto(img7)}
                className={style.img5}
                src={img7}
                alt=""
              />
              <img
                onClick={() => handlePhoto(img8)}
                className={style.img6}
                src={img8}
                alt=""
              />
            </div>
            <img
              onClick={() => handlePhoto(img9)}
              className={style.img7}
              src={img9}
              alt=""
            />
          </div>
          <img
            onClick={() => handlePhoto(img10)}
            className={style.img8}
            src={img10}
            alt=""
          />
        </div>
      </div>

      <div>
        <div
          className={
            photo !== null ? style.backgroundOpen : style.backgroundClose
          }
        ></div>
        {x === true ? (
          isExpanded===true?
          <p className={style.expand} onClick={() => handleExpand()}>
            <BsArrowsAngleContract size={30} color='#000000ad'/>
          </p>:
           <p className={style.expand} onClick={() => handleExpand()}>
            <BsArrowsAngleExpand size={30} color='#000000ad'/>
          </p>
          
        ) : (
          <div></div>
        )}
        {x === true ? (
          <p className={style.x} onClick={() => handleClose()}>
            <TfiClose size={35}/>
          </p>
        ) : (
          <div></div>
        )}
        {photo !== null ? (
          <div className={style.gridFullScreen}>
            <p onClick={() => handlePrev(photo)} className={style.prevBtn}>
              <SlArrowLeft size={40} color='#000000ad' />
            </p>
            <img className={isExpanded===false?style.currentImg:style.currentImgExpanded} src={photo} alt="" />
            <p onClick={() => handleNext(photo)} className={isExpanded===true? style.nextBtnExpand: style.nextBtn}>
            
            <SlArrowRight size={40}  color='#000000ad'/>

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
