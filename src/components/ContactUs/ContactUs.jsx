import React from 'react';
import { useSelector } from 'react-redux';

function ContactUs(props) {
  const projects = useSelector(state => state.projects);
  console.log(projects);
  return (
    <div>
      contact us
    </div>
  );
}

export default ContactUs;
