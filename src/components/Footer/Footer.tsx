import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../assets/originlogo.jpg";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./Footer.css";
import prueba from "../assets/imagen8.png";

function Footer() {
  return (
    <footer className="bodyFooter">
      <div className="iconsNavigateFooter">
        <h4 className="followUs">
          FOLLOW US
          <br></br>
          <br></br>
          <hr color="#777777"></hr>
        </h4>
        <div className="followUsContactContainer">
        <a
          className="iconsFooter"
          href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
        >
          <FacebookIcon  className="iconsFooterItem"/>
          <div className="followUsInfoLabel">www.facebook.com</div>
        </a>
        <a
          className="iconsFooter"
          href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
        >
          <InstagramIcon className="iconsFooterItem" />
          <div className="followUsInfoLabel">www.instagram.com</div>
        </a>
        <a
          className="iconsFooter"
          href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
        >
          <TwitterIcon  className="iconsFooterItem"/>
          <div className="followUsInfoLabel">www.twitter.com</div>
        </a>
        </div>
   
      </div>
      <div className="iconsNavigateFooter">
        <h4 className="ContactUs">
          CONTACTENOS
          <br></br>
          <br></br>
          <hr color="#777777"></hr>
        </h4>

        <div className="ContactUsContactContainer">

        <a
          className="iconsFooter"
          href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
        >
          <AlternateEmailIcon className="footeremailIcon" />
          <div className="contactUsInfoLabel">
            maildelaconstructora@gmail.com
          </div>
        </a>
        <a
          className="iconsFooter"
          href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
        >
          <InstagramIcon  className="footeremailIcon"/>
          <div className="contactUsInfoLabel">
            maildelaconstructora@gmail.com
          </div>
        </a>
        <a
          className="iconsFooter"
          href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!"
        >
          <TwitterIcon className="footeremailIcon" />
          <div className="contactUsInfoLabel">
            maildelaconstructora@gmail.com
          </div>
        </a>
        </div>

      </div>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <div className="carousel">
            <div className="image-one"></div>
            <div className="image-two"></div>
            <div className="image-three"></div>
          </div>
        </div>
      </div>
      <div className="containerLogo">
        <h3 className="titleFooter">
          {" "}
          Origin Holdings S.A.S
          <hr></hr>
        </h3>

        <img className="imgLogo" src={logo} alt="" />
      </div>

      <div className="copyrigth">
        Copyright © {new Date().getFullYear()} Origin Holdings S.A.S
      </div>
    </footer>
  );
}

export default Footer;
