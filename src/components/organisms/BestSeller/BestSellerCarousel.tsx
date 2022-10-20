import React from 'react';
import { bestSellerCarouselData } from '../../../dummy-data/data';
import BestSellerItem from './BestSellerItem';

const BestSellerCarousel = () => {
  return (
    <div className=''>
      {bestSellerCarouselData.map((slide, index) => (
        <BestSellerItem key={index} {...slide} />
      ))}
    </div>
  );
};

export default BestSellerCarousel;
