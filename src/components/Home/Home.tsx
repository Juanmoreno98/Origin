import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ContactUs from "../ContactUs/ContactUs.tsx";
import Footer from "../Footer/Footer.tsx";
import Navbar from "../Navbar/Navbar";
import img1 from "../../img/La-Soledad-Norte.jpg";
import img2 from "../../img/Santa_maria_del_lago.jpeg";
import img3 from "../../img/Estacion_Avenida_Cali.jpg";
import img4 from "../../img/aeropuerto_el_dorado.jpg";
import img5 from "../../img/Tiatan_Plaza.jpg";
import img6 from "../../img/Clinica_Santa_Maria_Del_Lago.jpg";
import TIPO1 from "../../img/Apto_Tipo1.JPG";
import TIPO2 from "../../img/Apto_Tipo2.JPG";
import TIPO3 from "../../img/Apto_Tipo3.JPG";
import TIPO4 from "../../img/Apto_Tipo4.JPG";
import TIPO5 from "../../img/Apto_Tipo5.JPG";
import APTOS from "../../img/APTOS.png";

import video from "../../film/video prueba.mp4";
import "./home.css";
import { CardMedia } from "@mui/material";
import { green, red } from "@mui/material/colors";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(
  name: number,
  disponible: string,
  m2: number,
  alcobas: number,
  baños: number,
  salaComedor: string,
  cocina: string,
  areaRopa: string
) {
  return {
    name,
    disponible,
    m2,
    alcobas,
    baños,
    salaComedor,
    cocina,
    areaRopa,
  };
}

function createDataApto(
  name: number,
  disponible: string,
  m2: string,
) {
  return {
    name,
    disponible,
    m2
  };
}

const apartamentos = [
  createDataApto(201, "Disponible 😃", "45.56 m2"),
  createDataApto(202, "Disponible 😃", "61.73 m2"),
  createDataApto(203, "Disponible 😃", "23.31 m2"),
  createDataApto(204, "Disponible 😃", "32.71 m2"),
  createDataApto(205, "Disponible 😃", "45.45 m2"),
  createDataApto(301, "Disponible 😃", "45.56 m2"),
  createDataApto(302, "No Disponible😢", "61.73 m2"),
  createDataApto(303, "Disponible 😃", "23.31 m2"),
  createDataApto(303, "Disponible 😃", "23.31 m2"),
  createDataApto(303, "Disponible 😃", "23.31 m2"),
  createDataApto(303, "Disponible 😃", "23.31 m2"),
  createDataApto(304, "Disponible 😃", "32.71 m2"),
  createDataApto(305, "Disponible 😃", "45.45 m2"),
  createDataApto(401, "Disponible 😃", "45.56 m2"),
  createDataApto(402, "Disponible 😃", "61.73 m2"),
  createDataApto(403, "Disponible 😃", "23.31 m2"),
  createDataApto(404, "Disponible 😃", "45.56 m2"),
  createDataApto(405, "Disponible 😃", "45.45 m2"),
  createDataApto(501, "Disponible 😢", "45.56 m2"),
  createDataApto(503, "No Disponible 😢", "61.73 m2"),
  createDataApto(503, "Disponible 😃", "23.31 m2"),
  createDataApto(504, "Disponible 😃", "32.71 m2"),
  createDataApto(505, "Disponible 😃", "45.45 m2"),
];

const rowsTipo1 = [
  createData(201, "😃", 45.56, 2, 1, "Si", "Si", "Si"),
  createData(301, "😃", 45.56, 2, 1, "Si", "Si", "Si"),
  createData(401, "😃", 45.56, 2, 1, "Si", "Si", "Si"),
  createData(501, "😢", 45.56, 2, 1, "Si", "Si", "Si"),
];
const rowsTipo2 = [
  createData(202, "😃", 61.73, 3, 2, "Si", "Si", "Si"),
  createData(302, "😢", 61.73, 3, 2, "Si", "Si", "Si"),
  createData(402, "😃", 61.73, 3, 2, "Si", "Si", "Si"),
  createData(503, "😢", 61.73, 3, 2, "Si", "Si", "Si"),
];

const rowsTipo3 = [
  createData(205, "😃", 45.45, 2, 1, "Si", "Si", "Si"),
  createData(305, "😃", 45.45, 2, 1, "Si", "Si", "Si"),
  createData(405, "😃", 45.45, 2, 1, "Si", "Si", "Si"),
  createData(505, "😃", 45.45, 2, 1, "Si", "Si", "Si"),
];

const rowsTipo4 = [
  createData(204, "😃", 32.71, 1, 1, "Si", "Si", "Si"),
  createData(304, "😃", 32.71, 1, 1, "Si", "Si", "Si"),
  createData(404, "😃", 32.71, 1, 1, "Si", "Si", "Si"),
  createData(504, "😃", 32.71, 1, 1, "Si", "Si", "Si"),
];

const rowsTipo5 = [
  createData(203, "😃", 23.31, 1, 1, "Si", "Si", "Si"),
  createData(303, "😃", 23.31, 1, 1, "Si", "Si", "Si"),
  createData(403, "😃", 23.31, 1, 1, "Si", "Si", "Si"),
  createData(503, "😃", 23.31, 1, 1, "Si", "Si", "Si"),
];

function Home() {
  const [openTipo1, setOpenTipo1] = React.useState(false);

  const handleClickOpenTipo1 = () => {
    setOpenTipo1(true);
  };

  const handleCloseTipo1 = () => {
    setOpenTipo1(false);
  };

  const [openTipo2, setOpenTipo2] = React.useState(false);

  const handleClickOpenTipo2 = () => {
    setOpenTipo2(true);
  };

  const handleCloseTipo2 = () => {
    setOpenTipo2(false);
  };

  const [openTipo3, setOpenTipo3] = React.useState(false);

  const handleClickOpenTipo3 = () => {
    setOpenTipo3(true);
  };

  const handleCloseTipo3 = () => {
    setOpenTipo3(false);
  };

  const [openTipo4, setOpenTipo4] = React.useState(false);

  const handleClickOpenTipo4 = () => {
    setOpenTipo4(true);
  };

  const handleCloseTipo4 = () => {
    setOpenTipo4(false);
  };

  const [openTipo5, setOpenTipo5] = React.useState(false);

  const handleClickOpenTipo5 = () => {
    setOpenTipo5(true);
  };

  const handleCloseTipo5 = () => {
    setOpenTipo5(false);
  };

  const [openApartamentos, setOpenApartamentos] = React.useState(false);

  const handleClickOpenApartamentos = () => {
    setOpenApartamentos(true);
  };

  const handleCloseApartamentos = () => {
    setOpenApartamentos(false);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="barra"></div>
      <div className="initialPosition">
        <div className="box">
          <div className="sectionHome">
            <div className="containerHome">
              <div className="carouselHome">
                <input type="radio" name="slides" id="slide-1" />
                <input type="radio" name="slides" id="slide-2" />
                <input type="radio" name="slides" id="slide-3" />
                <input type="radio" name="slides" id="slide-4" />
                <input type="radio" name="slides" id="slide-5" />
                <input type="radio" name="slides" id="slide-6" />
                <ul className="carousel__slides">
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img1} alt="" />
                      </div>
                      <figcaption>
                        Es un sector de fácil acceso; el barrio está rodeado por
                        importantes vías principales como la Avenida Ciudad de
                        Cali, la calle 80 y la calle 72.
                        <span className="credit">
                          Localidad de Puente Aranda
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img2} alt="" />
                      </div>
                      <figcaption>
                        Cuentas con la suerte de relajarte a pocos minutos en el
                        Humedal Santa María del Lago 2.4 Km - 8 Min
                        <span className="credit">
                          Parque Santa Maria Del Lago
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img3} alt="" />
                      </div>
                      <figcaption>
                        Al interior de Soledad Norte se encuentran 54 paraderos
                        del SITP, ubicados principalmente sobre la Avenida
                        Ciudad de Cali y la calle 72.
                        <span className="credit">Estacion Avenida De Cali</span>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img4} alt="" />
                      </div>
                      <figcaption>
                        Su ubicación cuenta con el beneficio de estar a 5.0 km -
                        17 min del aeropuerto internacional El Dorado.
                        <span className="credit">
                          Aeropuerto Internacional El Dorado
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img5} alt="" />
                      </div>
                      <figcaption>
                        Para el entretenimiento y comercio se encuentra uno de
                        los mejores y más completos centros comerciales a 3.2 Km
                        – 8 Min.
                        <span className="credit">
                          Centro Comercial Titan Plaza
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src={img6} alt="" />
                      </div>
                      <figcaption>
                        Su salud y bienestar también es importante para nosotros
                        por eso el sector cuenta con una clínica a 1.9 Km – 8
                        Min
                        <span className="credit">
                          Clínica Infantil Sta. María del Lago
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
                <ul className="carousel__thumbnails">
                  <li>
                    <label htmlFor="slide-1">
                      <img src={img1} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-2">
                      <img src={img2} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-3">
                      <img src={img3} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-4">
                      <img src={img4} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-5">
                      <img src={img5} alt="" />
                    </label>
                  </li>
                  <li>
                    <label htmlFor="slide-6">
                      <img src={img6} alt="" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="videoHome">
          <video width="200px" autoPlay muted playsInline controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------->>>> */}
      <div className="content-wrapper">
        <div className="news-card">
          <a className="news-card__card-link"></a>
          <img src={TIPO1} alt="" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Apartamento Tipo 1</h2>
            <div className="news-card__post-date">45.56 m2 Area Privada</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                {" "}
                Apartamentos Num: 201 - 301 - 401 - 501 <br /> 2 alcobas, sala
                comedor, 1 baño, cocina y área de ropas&hellip;
              </p>
              </div>
              <div>
                <div className="positionButton">
                  <Button
                    className="button"
                    variant="contained"
                    onClick={handleClickOpenTipo1}
                  >
                    ver Mas
                  </Button>
                </div>
                <Dialog
                  open={openTipo1}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleCloseTipo1}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 480,
                      height: 800,
                      objectFit: "fill",
                      marginTop: 0,
                      marginLeft: 7,
                    }}
                    image={TIPO1}
                    alt="img"
                  />
                  <CardMedia
                    component="video"
                    image={video}
                    controls
                    className="videoTipo1"
                  />
                  <br />
                  <hr />
                  <DialogTitle>{"Apartamentos Tipo 1"}</DialogTitle>
                  <DialogActions>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>#&nbsp;Apto</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="center">m2</TableCell>
                            <TableCell align="right">Alcobas</TableCell>
                            <TableCell align="right">Baños</TableCell>
                            <TableCell align="right">Cocina</TableCell>
                            <TableCell align="right">
                              Sala&nbsp;Comedor
                            </TableCell>
                            <TableCell align="right">Area&nbsp;Ropas</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowsTipo1.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="center">
                                {row.disponible}
                              </TableCell>
                              <TableCell align="center">{row.m2}</TableCell>
                              <TableCell align="center">
                                {row.alcobas}
                              </TableCell>
                              <TableCell align="center">{row.baños}</TableCell>
                              <TableCell align="center">{row.cocina}</TableCell>
                              <TableCell align="center">
                                {row.salaComedor}
                              </TableCell>
                              <TableCell align="center">
                                {row.areaRopa}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </DialogActions>
                  <Button sx={{margin: 1}} variant="contained" onClick={handleCloseTipo1}>Cerrar</Button>
                </Dialog>
            </div>
          </div>
        </div>

        <div className="news-card">
          <a className="news-card__card-link"></a>
          <img src={TIPO2} alt="" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Apartamento Tipo 2</h2>
            <div className="news-card__post-date">61.73 m2 - Area Privada</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Apartamentos Num: 202 - 302 - 402 - 503 <br />3 alcobas, sala
                comedor, 2 baños, cocina, área de ropas independiente&hellip;
              </p>
            </div>
            <div>
              <div className="positionButton">
                <Button
                  className="button"
                  variant="contained"
                  onClick={handleClickOpenTipo2}
                >
                  ver Mas
                </Button>
              </div>
              <Dialog
                open={openTipo2}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseTipo2}
                aria-describedby="alert-dialog-slide-description"
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 560,
                    height: 800,
                    objectFit: "fill",
                    marginTop: -5,
                    marginLeft: -1,
                  }}
                  image={TIPO2}
                  alt="img"
                />
                <CardMedia
                  component="video"
                  image={video}
                  controls
                  className="videoTipo1"
                />
                <br />
                <hr />
                <DialogTitle>{"Apartamentos Tipo 2"}</DialogTitle>
                <DialogActions>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>#&nbsp;Apto</TableCell>
                          <TableCell align="right">Estado</TableCell>
                          <TableCell align="center">m2</TableCell>
                          <TableCell align="right">Alcobas</TableCell>
                          <TableCell align="right">Baños</TableCell>
                          <TableCell align="right">Cocina</TableCell>
                          <TableCell align="right">Sala&nbsp;Comedor</TableCell>
                          <TableCell align="right">Area&nbsp;Ropas</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowsTipo2.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="center">
                              {row.disponible}
                            </TableCell>
                            <TableCell align="center">{row.m2}</TableCell>
                            <TableCell align="center">{row.alcobas}</TableCell>
                            <TableCell align="center">{row.baños}</TableCell>
                            <TableCell align="center">{row.cocina}</TableCell>
                            <TableCell align="center">
                              {row.salaComedor}
                            </TableCell>
                            <TableCell align="center">{row.areaRopa}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </DialogActions>
                <Button sx={{margin: 1}} variant="contained" onClick={handleCloseTipo2}>Cerrar</Button>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="news-card">
          <a className="news-card__card-link"></a>
          <img src={TIPO3} alt="" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Apartamento Tipo 3</h2>
            <div className="news-card__post-date">45.45 m2 - Area Privada</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Apartamentos Num: 205 - 305 - 405 - 505 <br />2 alcobas, sala
                comedor, 1 baño, cocina y área de ropas&hellip;
              </p>
            </div>
            <div>
              <div className="positionButton">
                <Button
                  className="button"
                  variant="contained"
                  onClick={handleClickOpenTipo3}
                >
                  ver Mas
                </Button>
              </div>
              <Dialog
                open={openTipo3}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseTipo3}
                aria-describedby="alert-dialog-slide-description"
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 450,
                    height: 800,
                    objectFit: "fill",
                    marginTop: 0,
                    marginLeft: 8,
                  }}
                  image={TIPO3}
                  alt="img"
                />
                <CardMedia
                  component="video"
                  image={video}
                  controls
                  className="videoTipo1"
                />
                <br />
                <hr />
                <DialogTitle>{"Apartamentos Tipo 3"}</DialogTitle>
                <DialogActions>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>#&nbsp;Apto</TableCell>
                          <TableCell align="right">Estado</TableCell>
                          <TableCell align="center">m2</TableCell>
                          <TableCell align="right">Alcobas</TableCell>
                          <TableCell align="right">Baños</TableCell>
                          <TableCell align="right">Cocina</TableCell>
                          <TableCell align="right">Sala&nbsp;Comedor</TableCell>
                          <TableCell align="right">Area&nbsp;Ropas</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowsTipo3.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="center">
                              {row.disponible}
                            </TableCell>
                            <TableCell align="center">{row.m2}</TableCell>
                            <TableCell align="center">{row.alcobas}</TableCell>
                            <TableCell align="center">{row.baños}</TableCell>
                            <TableCell align="center">{row.cocina}</TableCell>
                            <TableCell align="center">
                              {row.salaComedor}
                            </TableCell>
                            <TableCell align="center">{row.areaRopa}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </DialogActions>
                <Button sx={{margin: 1}} variant="contained" onClick={handleCloseTipo3}>Cerrar</Button>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="news-card">
          <a className="news-card__card-link"></a>
          <img src={TIPO4} alt="" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Apartamento Tipo 4</h2>
            <div className="news-card__post-date">32.71 m2 - Area Privada</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Apartamentos Num: 204 - 304 - 404 - 504 <br />
                Aparta estudio 1 alcoba, sala comedor, 1 baño, cocina y área de
                ropas&hellip;
              </p>
            </div>
            <div>
                <div className="positionButton">
                  <Button
                    className="button"
                    variant="contained"
                    onClick={handleClickOpenTipo4}
                  >
                    ver Mas
                  </Button>
                </div>
                <Dialog
                  open={openTipo4}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleCloseTipo4}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 580,
                      height: 800,
                      objectFit: "fill",
                      marginTop: 0,
                      marginLeft: 1,
                    }}
                    image={TIPO4}
                    alt="img"
                  />
                  <CardMedia
                    component="video"
                    image={video}
                    controls
                    className="videoTipo1"
                  />
                  <br />
                  <hr />
                  <DialogTitle>{"Apartamentos Tipo 4"}</DialogTitle>
                  <DialogActions>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>#&nbsp;Apto</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="center">m2</TableCell>
                            <TableCell align="right">Alcobas</TableCell>
                            <TableCell align="right">Baños</TableCell>
                            <TableCell align="right">Cocina</TableCell>
                            <TableCell align="right">
                              Sala&nbsp;Comedor
                            </TableCell>
                            <TableCell align="right">Area&nbsp;Ropas</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowsTipo4.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="center">
                                {row.disponible}
                              </TableCell>
                              <TableCell align="center">{row.m2}</TableCell>
                              <TableCell align="center">
                                {row.alcobas}
                              </TableCell>
                              <TableCell align="center">{row.baños}</TableCell>
                              <TableCell align="center">{row.cocina}</TableCell>
                              <TableCell align="center">
                                {row.salaComedor}
                              </TableCell>
                              <TableCell align="center">
                                {row.areaRopa}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </DialogActions>
                  <Button sx={{margin: 1}} variant="contained" onClick={handleCloseTipo4}>Cerrar</Button>
                </Dialog>
            </div>
          </div>
        </div>

        <div className="news-card">
          <a className="news-card__card-link"></a>
          <img src={TIPO5} alt="" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Apartamento Tipo 5</h2>
            <div className="news-card__post-date">23.31 m2 - Area Privada</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Apartamentos Num: 203 - 303 - 403 - 503 <br />
                Aparta estudio 1 alcoba, sala comedor, 1 baño, cocina y área de
                ropas&hellip;
              </p>
            </div>
            <div>
                <div className="positionButton">
                  <Button
                    className="button"
                    variant="contained"
                    onClick={handleClickOpenTipo5}
                  >
                    ver Mas
                  </Button>
                </div>
                <Dialog
                  open={openTipo5}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleCloseTipo5}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 580,
                      height: 800,
                      objectFit: "fill",
                      marginTop: 0,
                      marginLeft: 0,
                    }}
                    image={TIPO5}
                    alt="img"
                  />
                  <CardMedia
                    component="video"
                    image={video}
                    controls
                    className="videoTipo1"
                  />
                  <br />
                  <hr />
                  <DialogTitle>{"Apartamentos Tipo 5"}</DialogTitle>
                  <DialogActions>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>#&nbsp;Apto</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="center">m2</TableCell>
                            <TableCell align="right">Alcobas</TableCell>
                            <TableCell align="right">Baños</TableCell>
                            <TableCell align="right">Cocina</TableCell>
                            <TableCell align="right">
                              Sala&nbsp;Comedor
                            </TableCell>
                            <TableCell align="right">Area&nbsp;Ropas</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowsTipo5.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="center">
                                {row.disponible}
                              </TableCell>
                              <TableCell align="center">{row.m2}</TableCell>
                              <TableCell align="center">
                                {row.alcobas}
                              </TableCell>
                              <TableCell align="center">{row.baños}</TableCell>
                              <TableCell align="center">{row.cocina}</TableCell>
                              <TableCell align="center">
                                {row.salaComedor}
                              </TableCell>
                              <TableCell align="center">
                                {row.areaRopa}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </DialogActions>
                  <Button sx={{margin: 1}} variant="contained" onClick={handleCloseTipo5}>Cerrar</Button>
                </Dialog>
            </div>
          </div>
        </div>

        <div className="news-card">
          <a className="news-card__card-link"></a>
          <img src={APTOS} alt="" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title"> Apartamentos</h2>
            <div className="news-card__post-date"> 5° Pisos - 20 APTO</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur nemo tempore repellat? Ullam sed officia.
              </p>
            </div>
            <div>
              <div className="positionButton">
                <Button
                  className="button"
                  variant="contained"
                  onClick={handleClickOpenApartamentos}
                >
                  ver Mas
                </Button>
              </div>
              <Dialog
                open={openApartamentos}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseApartamentos}
                aria-describedby="alert-dialog-slide-description"
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 600,
                    height: 800,
                    objectFit: "fill",
                    marginTop: -10,
                    marginLeft: 0,
                    marginBottom: -12
                  }}
                  image={APTOS}
                  alt="img"
                />
                {/* <CardMedia
                  component="video"
                  image={video}
                  controls
                  className="videoTipo1"
                /> */}
                <hr />
                <DialogTitle>{"Apartamentos"}</DialogTitle>
                <DialogActions>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center" >Numero&nbsp;Apto</TableCell>
                          <TableCell align="center">Estado</TableCell>
                          <TableCell align="center">Tamaño</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {apartamentos.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="center" component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="center">
                              {row.disponible}
                            </TableCell>
                            <TableCell align="center">{row.m2}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </DialogActions>
                <Button sx={{margin: 1}} variant="contained" onClick={handleCloseApartamentos}>Cerrar</Button>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------------> */}

      <div className="position">
        <div className="carousel-wrapperHome">
          <div className="carousel-containerHome">
            <div className="carousel2">
              <div className="image-one1"></div>
              <div className="image-two1"></div>
              <div className="image-three1"></div>
            </div>
          </div>
        </div>
        <div className="carousel-wrapperHome">
          <div className="carousel-containerHome">
            <div className="carousel2">
              <div className="image-one2"></div>
              <div className="image-two2"></div>
              <div className="image-three2"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ContactUs />
    </div>
  );
}

export default Home;
