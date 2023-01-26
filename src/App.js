import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/AboutUs/About.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.tsx"
import Navbar from "./components/Navbar/Navbar.jsx";
import Proyects from "./components/Proyects/Proyects.jsx";



export default function App() {
  return (
    <div >
      <Router>
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route  path="/" element={<Navbar />} />
          <Route exact path="/about" element={<About />} />
           <Route exact path="/footer" element={<Footer />} />
           <Route exact path="/contactus" element={<ContactUs />} />
           <Route exact path="/proyects" element={<Proyects />} />
           <Route exact path="projects/:id" element={<CardDetail />} />

        </Routes>
      </Router>
    </div>
  );
}
