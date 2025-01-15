import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} width="150" height="150" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price.toLocaleString()} CLP</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


