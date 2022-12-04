import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/atoms/Loader';
import SingleProductRow from '../../components/molecules/SingleProductRow';
import { addProductsState } from '../../feature/productSlice';
import { AppDispatch, RootState } from '../../feature/store';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.product);
  useEffect(() => {
    dispatch(addProductsState());
  }, [dispatch]);
  return (
    <div className='w-full flex justify-center'>
      {productState.loading ? (
        <Loader className='w-full h-screen flex items-center justify-center' />
      ) : (
        <div className='max-w-screen-xl flex flex-col gap-4 p-4'>
          <h1 className='text-4xl font-bold my-10 font-heading'>Products</h1>
          {productState.products.map((product, index) => {
            return (
              <SingleProductRow index={index} key={index} product={product} />
            );
          })}
        </div>
      )}{' '}
    </div>
  );
};

export default Products;
