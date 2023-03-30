import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../assets/LOGOCOLOR.png";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
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
              <div className="followUsInfoLabelOrigin"> calle 137 #55 - 32</div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>

            <div className="originsBlock">
              <div className="followUsInfoLabelOriginTitle">Origin 1 </div>
              <div className="followUsInfoLabelOrigin"> calle 137 #55 - 32</div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>
            <div className="originsBlock">
              <div className="followUsInfoLabelOriginTitle">Origin 1 </div>
              <div className="followUsInfoLabelOrigin"> calle 137 #55 - 32</div>
              <div className="followUsInfoLabelOrigin"> Bogotá - Colombia</div>
            </div>
          </div>
        </div>
        <hr className="hrVertical"></hr>

        <div className="ContactNavigateFooter">
          <h4 className="ContactUs">Contactanos</h4>
          <div>

            <a
              className="iconsFooter"
              href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
            >
              <AlternateEmailIcon className="footeremailIcon" />
            </a>
            <a
              className="iconsFooter"
              href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
            >
              <InstagramIcon className="footeremailIcon" />
            </a>
            <a
              className="iconsFooter"
              href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
            >
              <TwitterIcon className="footeremailIcon" />
          
            </a>
          </div>
          <div className="correo">
                <div className="titleCorreo">Correo:</div>
                <div>originholdings@gmail.com</div>
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
