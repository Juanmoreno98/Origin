import { Toolbar } from "@mui/material";
import React from "react";
import "./Navbar.css";
import logo from "../assets/LOGO2.png";

function Navbar() {
  return (
    <div className="navGeneral">
      <header className="header">
        <div class="wave">
          <div class="wave2">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="svg"
            >
              <path
                d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                className="path"
              ></path>
            </svg>
          </div>
        </div>

        <nav class="menu" id="menu">
          <div class="navegacion">
            <div class="lista-active lista" id="lista">
              <a href="/">Inicio</a>
              <a href="SobreNosotros/SobreNosotros.html">Sobre nosotros</a>
              <a href="Proyectos/Proyectos.html">Proyectos</a>
            </div>
          </div>
        </nav>

        <div class="textos">
          <div class="titulo">ORIGIN HOLDINGS S.A.S</div>
          <h2 class="cel-inactive">
            No se puede cargar la pagina en este tamaño de pantalla
          </h2>

          <div class="subtitulo">La mejor empresa constructora de Colombia</div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
