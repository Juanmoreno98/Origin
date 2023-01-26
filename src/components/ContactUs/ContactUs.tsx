import React from 'react';
import "./ContactUs.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
function ContactUs() {

  return (
    <div>
<div className="floating-container">
  <div className="floating-button">Contactenos!</div>
  <div className="element-container">


    <a className='float-element tooltip-left' href="https://api.whatsapp.com/send?phone=5491166417018&text=HOLA" > 

        <WhatsAppIcon />
   </a>

   <a className='float-element tooltip-left' href="mailto:valverdetomas98@gmail.com?Subject=Contact%20me!" > 

<EmailIcon />
</a>
  </div>
</div>

    </div>
  );
}

export default ContactUs;
