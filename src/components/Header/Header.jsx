import React from "react";
import "./Header.css";

// img
import arg from "../../assets/argentinaFlag.jpg";
import eu from "../../assets/estadosUnidosFlag.jpg";
import japon from "../../assets/japonFlag.jpg";
import mex from "../../assets/mexicoFlag.jpg";
import esp from "../../assets/spainFlag.jpg";
// MUI
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="Header-top-left">
        <img src={arg} alt="bandera argentina" />
        <img src={eu} alt="bandera Estado Unidense" />
        <img src={japon} alt="bandera Japonesa" />
        <img src={esp} alt="bandera Española" />
        <img src={mex} alt="bandera mexicana" />
      </div>
      <div className="Header-top-right">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="" alt="" />
        </a>
        <a
          className="InstagramIcon"
          href="https://www.instagram.com/sanginesargentina/"
          target="_blank"
        >
          <InstagramIcon sx={{ fontSize: 40, color: "#e4405f" }} />
        </a>
        <a
          href="https://www.facebook.com/SanGinesArgentina?_rdc=1&_rdr"
          target="_blank"
        >
          <FacebookIcon sx={{ fontSize: 45, color: "#3b5998" }} />
        </a>
        <a
          className="LinkedinIcon"
          href="https://www.linkedin.com/company/chocolater%C3%ADa-san-gin%C3%A9s-argentina?trk=similar-pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: 45, color: "#0077b5" }} />
        </a>
      </div>
    </div>
  );
};

export default Header;
