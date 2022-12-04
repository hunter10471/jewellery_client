import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../../interfaces/Product.interface';
import Button from '../../atoms/Button';
import Rating from '../Rating';

interface IProductSingleRow {
  product: IProduct;
  index: number;
}

const SingleProductRow = ({ product, index }: IProductSingleRow) => {
  const [liked, setLiked] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${index}`)}
      className='flex w-full shadow-md rounded-md p-4 text-gray-700 hover:scale-105 transition-all cursor-pointer '
    >
      <div className='flex-2'>
        <img
          className='w-[200px] h-[200px] object-scale-down  rounded-md'
          src={product.image}
          alt='product'
        />
      </div>
      <div className='m-8 flex-1'>
        <div className='flex flex-col'>
          <div className='flex flex-nowrap items-center justify-between w-full '>
            <h2 className='max-w-[500px] font-bold text-xl'>{product.title}</h2>
            <Button
              onClick={() => setLiked(!liked)}
              icon
              text={
                <AiFillHeart
                  fontSize={25}
                  className={`${
                    liked ? 'text-red-400' : 'text-gray-300'
                  } transition-all duration-300 `}
                />
              }
            />
          </div>
          <Rating rating={product.rating} />
        </div>
        <h3 className='font-medium text-3xl my-3'>${product.price}</h3>
      </div>
    </div>
  );
};

export default SingleProductRow;
