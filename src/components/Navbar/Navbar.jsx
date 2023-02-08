import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateOrigin1 = () => {
    navigate("/projects/Origin1");
  };
  const handleNavigateOrigin2 = () => {
    navigate("/projects/Origin2");
  };
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
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

        <Box sx={{display: 'flex',justifyContent:"end",fontFamily:"Segoe UI Symbol"}}>
          <Button sx={{ color: "#fff" }} onClick={handleGoHome}>
            Inicio
          </Button>
         

          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ color: "#fff" }}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Proyectos
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleNavigateOrigin1} disableRipple>
            
              Origin 1
            </MenuItem>
            <MenuItem onClick={handleNavigateOrigin2} disableRipple>
         
              Origin 2
            </MenuItem>
          </StyledMenu>
        <Button sx={{ color: "#fff" }}>Sobre nosotros</Button>
        </Box>
        <div class="textos">
          <div class="titulo">ORIGIN HOLDINGS S.A.S</div>
          <h2 class="cel-inactive">
            No se puede cargar la pagina en este tamaño de pantalla
          </h2>

          <div class="subtitulo">La mejor empresa constructora de Colombia</div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
