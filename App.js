import React, { useState } from 'react';
import { productData } from './productData'; // Datos de los productos
import ProductList from './ProductList'; // Componente que muestra los productos
import Cart from './Cart'; // Componente del carrito

function App() {
  const [cart, setCart] = useState([]); // Estado para almacenar los productos en el carrito

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para quitar productos del carrito
  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item !== productToRemove));
  };

  return (
    <div className="App">
      <h1>SHEIN</h1>
      <ProductList products={productData} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;


