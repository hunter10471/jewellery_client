import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/atoms/Loader';
import Sidebar from '../../components/molecules/Sidebar';
import SingleProductRow from '../../components/molecules/SingleProductRow';
import { products } from '../../dummy-data/data';
import { addProductsState } from '../../feature/productSlice';
import { AppDispatch, RootState } from '../../feature/store';
import { IProduct } from '../../interfaces/Product.interface';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.product);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { category } = useParams();
  useEffect(() => {
    dispatch(addProductsState());
    if (category)
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    else setFilteredProducts(products);
  }, [dispatch, category]);
  return (
    <div className='w-full flex justify-center'>
      {productState.loading ? (
        <Loader className='w-full h-screen flex items-center justify-center' />
      ) : (
        <div className='max-w-screen-xl flex  gap-4 p-4'>
          <Sidebar />
          <div className='flex flex-col gap-10'>
            <h1 className='text-4xl font-bold my-10 font-heading'>Products</h1>
            {filteredProducts.map((product, index) => {
              return (
                <SingleProductRow index={index} key={index} product={product} />
              );
            })}
          </div>
        </div>
      )}{' '}
    </div>
  );
};

export default Products;
