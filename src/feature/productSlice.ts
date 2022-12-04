import { IProduct, IProductState } from './../interfaces/Product.interface';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from '../api/Product.api';

const initialState: IProductState = {
  products: [],
  loading: false,
};

export const addProductsState = createAsyncThunk('products', async () => {
  const res = await getProducts();
  return res;
});

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      addProductsState.fulfilled,
      (state: IProductState, action: PayloadAction<IProduct[]>) => {
        state.products = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(addProductsState.pending, (state: IProductState) => {
      state.loading = true;
    });
    builder.addCase(addProductsState.rejected, (state: IProductState) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
