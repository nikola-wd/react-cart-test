import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

// TODO: create reducer and move from here
const products = require('../../data/mockProducts.json');

const Cart = () => {
  const { addedProducts, totalProductsPrice, totalProductsCount } = useSelector(
    (state) => state.cart
  );
  // const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart__inner">
        {!addedProducts.length && (
          <>
            <h3>Cart is Empty</h3>
            <p>Add some products</p>
          </>
        )}
        {addedProducts.length
          ? addedProducts.map((addedProduct) => {
              const pData = products.find((p) => p.id === addedProduct.id);

              return (
                <CartProduct
                  key={addedProduct.id}
                  id={addedProduct.id}
                  name={pData.name}
                  price={pData.price}
                  stock={pData.stock}
                  productCount={addedProduct.totalCount}
                  productTotalPrice={
                    addedProduct.totalCount * addedProduct.price
                  }
                />
              );
            })
          : null}
      </div>

      <div className="cart__bar">
        <h4>
          Count: <strong>{totalProductsCount}</strong>
        </h4>
        <h4>
          {/* TODO: Refactor math abs and fix appropriately */}
          Total: <strong>${Math.abs(totalProductsPrice.toFixed(2))}</strong>
        </h4>
        <button>Proceed</button>
      </div>
    </div>
  );
};

export default Cart;
