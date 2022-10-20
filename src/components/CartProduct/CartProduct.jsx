import React from 'react';

import { useDispatch } from 'react-redux';
import {
  decrementCount,
  incrementCount,
  removeItem,
} from '../../store/cartSlice';

import ProductCardWrap from '../ProductCardWrap/ProductCardWrap';
import CartProductIconMinus from './CartProductIconMinus';
import CartProductIconPlus from './CartProductIconPlus';
import CartProductIconTrash from './CartProductIconTrash';
const CartProduct = ({
  id,
  name,
  price,
  stock,
  productCount,
  productTotalPrice,
}) => {
  const dispatch = useDispatch();

  const handleDecrementCount = () =>
    dispatch(decrementCount({ productId: id, productPrice: price }));

  const handleIncrementCount = () =>
    dispatch(incrementCount({ productId: id, productPrice: price }));

  const handleRemoveItem = () => dispatch(removeItem({ productId: id }));

  return (
    <ProductCardWrap variation="sm" name={name} price={price} stock={stock}>
      <div className="cart-product-card__info">
        <h4>
          Added: <strong>{productCount}</strong>
        </h4>
        <h4>
          Total Price: <strong>${productTotalPrice.toFixed(2)}</strong>
        </h4>
      </div>
      <div className="product-card__actions">
        <button className="action-dec" onClick={handleDecrementCount}>
          <CartProductIconMinus />
        </button>
        <button className="action-inc" onClick={handleIncrementCount}>
          <CartProductIconPlus />
        </button>
        <button className="action-remove" onClick={handleRemoveItem}>
          <CartProductIconTrash />
        </button>
      </div>
    </ProductCardWrap>
  );
};

export default CartProduct;
