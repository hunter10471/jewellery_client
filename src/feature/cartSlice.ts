import { IProduct } from './../interfaces/Product.interface';
import { ICartState } from './../interfaces/Cart.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductCart: (state: ICartState, action: PayloadAction<IProduct>) => {
      const productIndex = state.items.findIndex(
        (product) => product.product.id === action.payload.id
      );
      if (productIndex !== -1) state.items[productIndex].quantity++;
      else state.items.push({ product: action.payload, quantity: 1 });
      state.total += action.payload.price;
    },
  },
});

export const { addProductCart } = cartSlice.actions;
export default cartSlice.reducer;
