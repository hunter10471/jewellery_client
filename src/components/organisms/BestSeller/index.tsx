import React from 'react';
import { bestSellerCarouselData } from '../../../dummy-data/data';
import Button from '../../atoms/Button';
import BestSellerItem from './BestSellerItem';

const BestSeller = () => {
  return (
    <div className='flex justify-center my-10 p-8'>
      <div className='flex max-w-6xl flex-wrap gap-6 justify-center items-center'>
        <div className='flex flex-col gap-6 mr-4'>
          <h1 className='font-heading text-4xl max-w-[300px] leading-[45px]'>
            Our Best Seller Products
          </h1>
          <p className='max-w-[350px] font-medium text-gray-700 text-sm'>
            Check out our all time best sellers and find the one best for you
            and your loved ones!{' '}
          </p>
          <Button text='Discover More' primary className='border-none' />
        </div>
        {bestSellerCarouselData.map((slide, index) => (
          <BestSellerItem key={index} {...slide} /> //Use carousel here instead
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
