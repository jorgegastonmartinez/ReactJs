import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import MenuCategory from "../MenuCategory/MenuCategory";
import { Link } from "react-router-dom";

// img
import logo from "../../assets/logotipo-san-gines.png";

const Navbar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <img src={logo} alt="Logo de San Ginés" />
      </Link>
      <ul className="ul">
        <Link className="li" to="/">
          INICIO
        </Link>
        <MenuCategory />
        <Link className="li" to="/gallery">
          GALERIA
        </Link>
        <Link className="li" to="/contact">
          CONTACTO
        </Link>
        <Link className="li" to="/shop">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
