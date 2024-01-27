import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import MenuCategory from '../MenuCategory/MenuCategory';

// img
import logo from '../../assets/logotipo-san-gines.png';

import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className='NavBar'>
        <Link to="/">
            <img src={logo} alt="Logo de San Ginés" />
        </Link>
        <ul className='ul'>
            <Link className='li' to="/">
                HOME
            </Link>
            <MenuCategory />           
            <Link className='li' to="/gallery">
                GALERIA
            </Link>
            <Link className='li' to="/about">
                ABOUT
            </Link>
            <Link className='li' to="/shop">
                <CartWidget />
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar;