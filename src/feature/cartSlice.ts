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
    addProduct: (state: ICartState, action: PayloadAction<IProduct>) => {},
  },
});

export default cartSlice.reducer;
