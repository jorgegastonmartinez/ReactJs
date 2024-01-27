import React, { useContext } from 'react';
import './ShopPage.css';
import { ItemsContext } from '../../context/ItemsContext';

import { Link } from 'react-router-dom';

const ShopPage = () => {
  const [items, setItems] = useContext(ItemsContext);

  const precioTotal = () => {
    return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const handleVaciarCarrito = () => {
    setItems([]);
  };

  return (
    <div className="container-carrito">
      <h1>TIENDA</h1>

      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.producto}</h2>
          <p>
            {item.cantidad} x ${item.precio}
          </p>
          <p>Subtotal: ${item.precio * item.cantidad}</p>
        </div>
      ))}
      <div>
        {items.length > 0 ? (
          <div>
            <h2>Precio total: ${precioTotal()}</h2>
            <button onClick={handleVaciarCarrito}>Vaciar Carrito</button>
            <Link to="/checkout">
              <button>Finalizar Compra</button>
            </Link>
            
          </div>
        ) : (
          <div>
            <p>No hay productos en el carrito</p>
            <Link to="/">
              <button>Ir a la Tienda</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;