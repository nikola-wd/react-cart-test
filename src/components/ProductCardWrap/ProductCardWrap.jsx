import React from 'react';
import './ProductCardWrap.css';

// variation lg, sm (Use Enum in TS)
const ProductCardWrap = ({
  variation = 'lg',
  name = '',
  price = 0,
  stock = 0,
  children,
}) => {
  return (
    <div className={`product-card ${variation}`}>
      <img src="https://source.unsplash.com/200x200" alt="productt 1" />
      <div className="cont">
        <h3>{name}</h3>
        <h4 className="product-card__price">Price: ${price.toFixed(2)}</h4>
        <h4 className="product-card__stock">Available: {stock}</h4>
        {children}
      </div>
    </div>
  );
};

export default ProductCardWrap;
