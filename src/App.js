import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/AboutUs/About.jsx";
import CardDetail from "./components/CardDetail/CardDetail.tsx";
import ContactUs from "./components/ContactUs/ContactUs.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./components/Home/Home.tsx"
import Navbar from "./components/Navbar/Navbar.jsx";
import Origin1 from "./components/Proyects/Origin1/Origin1.tsx";
import Origin2 from "./components/Proyects/Origin2/Origin2";
import Origin3 from "./components/Proyects/Origin3/Origin3.tsx";
import Proyects from "./components/Proyects/Proyects.jsx";



export default function App() {
  return (
    <div >
      <Router>
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route  path="/" element={<Navbar />} />
          <Route exact path="/about" element={<About />} />
           <Route path="/" element={<Footer />} />
           <Route exact path="/contactus" element={<ContactUs />} />
           <Route exact path="/proyects" element={<Proyects />} />
           <Route exact path="projects/Origin1" element={<Origin1 />} />
           <Route exact path="projects/Origin2" element={<Origin2 />} />
           <Route exact path="projects/Origin3" element={<Origin3 />} />




        </Routes>
      </Router>
    </div>
  );
}
