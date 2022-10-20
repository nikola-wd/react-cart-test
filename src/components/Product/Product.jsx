import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

import ProductCardWrap from '../ProductCardWrap/ProductCardWrap';

const Product = ({ id, name, price, stock }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () =>
    dispatch(addToCart({ productId: id, productPrice: price }));

  return (
    <ProductCardWrap variation="lg" name={name} price={price} stock={stock}>
      <div className="product-card__actions">
        <button className="action-favorite">Favorite</button>
        <button className="action-add-to-cart" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </ProductCardWrap>
  );
};

export default Product;
