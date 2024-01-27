import React from 'react';

// MUI
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { Link } from 'react-router-dom'

const MenuCategory = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    const styles = {
        buttonCategoryCss: {
          textDecoration: "none",
          color: "rgb(37, 58, 47)",
          fontFamily: "Yantramanav, sans-serif", 
          fontSize: 19.2,
          fontWeight: 550,
        },
          categoryCss: {
          color: "rgb(37, 58, 47)",
          fontZise: 19.2,
          textDecoration: "none",
        },
    };

    return (
      <div>
        <Button
          style={styles.buttonCategoryCss}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          CATEGORIAS
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
        >
            <MenuItem>
                <Link style={styles.categoryCss} to="/item-category/churreria">
                    CHURRERIA
                </Link>   
            </MenuItem>
            <MenuItem> 
                <Link style={styles.categoryCss} to="/item-category/bocatas" >
                    BOCATAS
                </Link> 
            </MenuItem>
            <MenuItem> 
                <Link style={styles.categoryCss} to="/item-category/ensaladas">
                    ENSALADAS
                </Link>
            </MenuItem>
            <MenuItem>
                <Link style={styles.categoryCss} to="/item-category/desayunos">
                    DESAYUNOS
                </Link>   
            </MenuItem>
        </Menu>
      </div>
    );
}

export default MenuCategory;