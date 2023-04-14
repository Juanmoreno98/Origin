import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../assets/LOGOCOLOR.png";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {BsFacebook} from 'react-icons/bs'
import {SiMaildotru} from 'react-icons/si'


import "./Footer.css";
import prueba from "../assets/imagen8.png";

function Footer() {
  return (
    <>
      <footer className="bodyFooter">
        <div className="containerLogo">
          <img className="imgLogo" src={logo} alt="" />
        </div>

        <hr className="hrVertical"></hr>

        <div className="iconsNavigateFooter">
          <h4 className="followUs">Datos</h4>
          <div className="followUsContactContainer">
            <div className="originsBlock">
              <div className="followUsInfoLabelOriginTitle">Origin 1 </div>
              <div className="followUsInfoLabelOrigin"> Carrera 32 #1d - 33</div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>

            <div className="originsBlock">
              <div className="followUsInfoLabelOriginTitle">Origin 2 </div>
              <div className="followUsInfoLabelOrigin"> Calle 5 #30 - 45</div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>
            <div className="originsBlock">
              <div className="followUsInfoLabelOriginTitle">Origin 3</div>
              <div className="followUsInfoLabelOrigin"> Calle 137 #55 - 32</div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>
          </div>
        </div>
        <hr className="hrVertical"></hr>

        <div className="ContactNavigateFooter">
          <h4 className="ContactUs">Contáctenos</h4>
          <div className="correo">
                <div className="titleCorreo">Correo:</div>
                <div>originholdings@gmail.com</div>
              </div>
          <div className="contactIconsFooter">

            <a
              className="iconsFooter"
              href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
            >
              <SiMaildotru size={40}  />
            </a>
            <a
              className="iconsFooter"
              href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
            >
              <BsFacebook size={40} />
            </a>
          </div>
      
       
        </div>
      </footer>
      <div className="copyrigth">
        Copyright © {new Date().getFullYear()} Origin Holdings S.A.S
      </div>
    </>
  );
}

export default Footer;
