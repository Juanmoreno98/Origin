import React from "react";
import "./ContactUs.css";
import WhatsAppIcon from "./whats.png";
import { BsWhatsapp } from "react-icons/bs";
import EmailIcon from "@mui/icons-material/Email";
function ContactUs() {
  return (
    <div>
      <div className="floating-container">
        <a
            className="floating-button"
            href="https://api.whatsapp.com/send?phone=5491166417018&text=HOLA"
          >
            <img className="whatsappIcon" src={WhatsAppIcon} alt="whatsapp" />
          </a>
      </div>
    </div>
  );
}

export default ContactUs;
