import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsState } from '../../feature/productSlice';
import { AppDispatch, RootState } from '../../feature/store';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state().product);
  useEffect(() => {
    dispatch(addProductsState());
  }, [dispatch]);
  return productState.loading ? <div></div> : <div></div>;
};

export default Products;
