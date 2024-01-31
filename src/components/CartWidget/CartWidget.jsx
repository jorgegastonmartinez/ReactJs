import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./CartWidget.css";

import React, { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const CartWidget = () => {
  const [items] = useContext(ItemsContext);

  const numeritoEnCarrito = () => {
    return items.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  return (
    <div className="CartIcon">
      <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
      <span>{numeritoEnCarrito()}</span>
    </div>
  );
};

export default CartWidget;
