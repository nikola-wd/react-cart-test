import React from 'react';

import Product from '../Product/Product';
import './Products.css';

// TODO: create reducer and move from here
const products = require('../../data/mockProducts.json');

const Products = () => {
  // const products = JSON.parse(productsData);

  return (
    <div className="products">
      <h2>Products</h2>

      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default Products;
