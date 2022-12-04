import { IProduct } from './../interfaces/Product.interface';
import { ICartState } from './../interfaces/Cart.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICartState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state: ICartState, action: PayloadAction<IProduct>) => {},
  },
});
