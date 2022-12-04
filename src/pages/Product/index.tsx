import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../api/Product.api';
import Button from '../../components/atoms/Button';
import Sizes from '../../components/molecules/Sizes';
import { IProduct } from '../../interfaces/Product.interface';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import BreadCrumbs from '../../components/molecules/BreadCrumbs';
import Rating from '../../components/molecules/Rating';
import Toast, { ToastType } from '../../components/atoms/Toast';
import { addProductsState } from '../../feature/productSlice';
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts();
      setProduct(data[0]);
    };
    id && fetchProduct();
    addProductsState();
  }, [id]);

  const addProduct = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div className='flex items-center justify-center w-full'>
      <div className='px-4 py-[50px] max-w-screen-xl flex justify-center gap-[100px] flex-wrap w-full'>
        <div className='flex flex-col'>
          <BreadCrumbs />
          <img
            className='w-[80vw] max-w-[400px] h-auto'
            src={product?.image}
            alt='product'
          />
        </div>
        <div className='max-w-[500px]'>
          <h3 className='text-primary font-bold uppercase my-2'>
            Women's Ring Collection
          </h3>
          <h1 className='text-3xl font-bold'>{product?.title}</h1>
          <Rating rating={product?.rating} />
          <h2 className='text-2xl font-bold mt-10'>${product?.price}</h2>
          <h6 className='font-medium text-gray-400 mt-1'>
            (Additional tax may be included)
          </h6>
          <Sizes />
          <div className='my-10 flex gap-4'>
            <Button
              className='flex items-center gap-2 tracking-wider rounded-[10px]   bg-gray-400 text-white '
              text='WISHLIST'
            >
              <AiFillHeart fontSize={20} />
            </Button>
            <Button
              onClick={addProduct}
              primary
              className='flex items-center gap-2 tracking-wider rounded-[10px]   '
              text='ADD TO CART'
            >
              <BsFillCartPlusFill fontSize={20} />
            </Button>
          </div>
          <div>
            <h3 className='font-bold uppercase text-gray-700 mt-10 mb-2'>
              Product Details
            </h3>
            <p className='font-medium text-gray-600'>{product?.description}</p>
          </div>
        </div>
      </div>
      <Toast
        className={`${success ? 'translate-x-0' : 'translate-x-[100%]'}`}
        text={'Product added successfully'}
        type={ToastType.success}
      />
    </div>
  );
};

export default Product;
