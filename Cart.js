import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importamos el ícono del carrito
import './Cart.css'; // Para los estilos

const Cart = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el modal está abierto

  // Función para abrir y cerrar el modal
  const toggleCart = () => setIsOpen(!isOpen);

  // Calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      {/* Icono del carrito en la esquina */}
      <div className="cart-icon" onClick={toggleCart}>
        <FaShoppingCart size={30} />
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </div>

      {/* Modal que muestra los productos agregados al carrito */}
      {isOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <h3>Carrito de Compras</h3>
            {cartItems.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <img src={item.image} alt={item.name} width="50" height="50" />
                    <p>{item.name} - ${item.price.toLocaleString()}</p>
                    <button onClick={() => removeFromCart(item)}>Quitar</button>
                  </li>
                ))}
              </ul>
            )}
            {/* Mostrar el total */}
            <h4>Total: ${calculateTotal().toLocaleString()}</h4>
            <button onClick={toggleCart}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

