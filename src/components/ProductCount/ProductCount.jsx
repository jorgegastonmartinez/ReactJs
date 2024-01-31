import "./ProductCount.css";

// MUI
import * as React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

import { useState } from "react";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const ProductCount = ({ itemData }) => {
  const [items, setItems] = useContext(ItemsContext);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    cantidad < itemData.stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleAgregar = () => {
    const itemAgregado = { ...itemData, cantidad };

    const nuevoItem = [...items];

    const estaEnElCarrito = nuevoItem.find(
      (prod) => prod.id === itemAgregado.id
    );
    
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
      setItems(nuevoItem);
    } else {
      setItems([...items, itemAgregado]);
    }

    setCantidad(1);

    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000);
  };

  return (
    <div>
      <div className="container-btn-quantity">
        <button className="btn-quantity" onClick={handleRestar}>
          -
        </button>
        <p className="text-quantity">{cantidad}</p>
        <button className="btn-quantity" onClick={handleSumar}>
          +
        </button>
      </div>
      <div className="container-btn-add">
        <Stack direction="row" spacing={2}>
          <Button
            className="btn-add"
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
            onClick={handleAgregar}
          >
            AGREGAR AL CARRITO
          </Button>
        </Stack>

        {showSuccessAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">Producto agregado exitosamente</Alert>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default ProductCount;
