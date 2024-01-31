import './ShopPage.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

// CONTEXT
import { ItemsContext } from '../../context/ItemsContext';

// MUI
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const ShopPage = () => {
  const [items, setItems] = useContext(ItemsContext);

  const precioTotal = () => {
    return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const handleEliminarProducto = (productId) => {
    const updatedItems = items.filter((item) => item.id !== productId);
    setItems(updatedItems);
  };

  const handleVaciarCarrito = () => {
    setItems([]);
  };

  return (
    <div className="container-carrito">
      <h1 className="tienda-title">TIENDA</h1>

      {items.map((item) => (
        <div className="container-product" key={item.id}>
          <img className="img-product" src={item.img} alt="" />
          <h2 className="title-product">{item.producto}</h2>
          <p className="price-product">
            {item.cantidad} x ${item.precio}
          </p>
          <p className="subtotal-product">
            Subtotal: ${item.precio * item.cantidad}
          </p>
          <button
            className="btn-eliminar"
            onClick={() => handleEliminarProducto(item.id)}
          >
            <DeleteForeverOutlinedIcon sx={{ fontSize: 30 }} />
          </button>
        </div>
      ))}
      <div>
        {items.length > 0 ? (
          <div>
            <div className="container-price">
              <Link style={{ textDecoration: "none" }} to="/">
                <button className="btn-regresar">🔙 seguir comprando</button>
              </Link>
              <h2 className="price-total">Precio total: ${precioTotal()}</h2>
            </div>

            <div className="container-btns">
              <button className="btn-vaciar" onClick={handleVaciarCarrito}>
                Vaciar Carrito
              </button>
              <Link className="link-btn" to="/checkout">
                <button className="btn-finalizar">Finalizar Compra</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="container-regresar">
            <p className="cart-vacio">No hay productos en el carrito</p>
            <Link style={{ textDecoration: "none" }} to="/">
              <button className="btn-regresar">🔙 VER PRODUCTOS</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;