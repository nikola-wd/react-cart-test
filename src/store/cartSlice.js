import { createSlice } from '@reduxjs/toolkit';

// TODO: Move to another file
// class CartProduct {
//   totalCount = 1;

//   constructor(id, price) {
//     this.id = id;
//     this.price = price;
//   }
// }

// TODO: convert products arr to a map
const initialState = {
  addedProducts: [],
  totalProductsPrice: 0,
  totalProductsCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let productIndex = state.addedProducts.findIndex(
        (p) => p.id === action.payload.productId
      );

      state.totalProductsPrice += action.payload.productPrice;
      state.totalProductsCount++;

      // if product already in cart
      if (productIndex !== -1) {
        state.addedProducts[productIndex].totalCount++;
      } else {
        state.addedProducts.push(
          {
            totalCount: 1,
            id: action.payload.productId,
            price: action.payload.productPrice,
          }
          // FIXME: For some reason throws error
          // new CartProduct(action.payload.productId, action.payload.productPrice)
        );
      }
    },
    decrementCount: (state, action) => {
      let productIndex = state.addedProducts.findIndex(
        (p) => p.id === action.payload.productId
      );

      if (state.addedProducts[productIndex].totalCount > 1) {
        state.addedProducts[productIndex].totalCount--;
      } else {
        state.addedProducts.splice(productIndex, 1);
      }

      state.totalProductsPrice -= action.payload.productPrice;
      state.totalProductsCount--;
    },
    incrementCount: (state, action) => {
      let productIndex = state.addedProducts.findIndex(
        (p) => p.id === action.payload.productId
      );

      state.totalProductsPrice += action.payload.productPrice;
      state.totalProductsCount++;
      state.addedProducts[productIndex].totalCount++;
    },
    removeItem: (state, action) => {
      let productIndex = state.addedProducts.findIndex(
        (p) => p.id === action.payload.productId
      );

      const itemPrice = state.addedProducts[productIndex].price;
      const itemCount = state.addedProducts[productIndex].totalCount;

      state.totalProductsPrice -= itemPrice * itemCount;
      state.totalProductsCount -= itemCount;
      state.addedProducts.splice(productIndex, 1);
    },
  },
});

export const { addToCart, decrementCount, incrementCount, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
