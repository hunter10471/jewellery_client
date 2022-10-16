import React from 'react';
import Button from '../../atoms/Button';

type ICarouselItem = {
  img: string;
  heading: string;
  description: string;
};

const CarouselItem = ({ img, heading, description }: ICarouselItem) => {
  return (
    <div className='flex  '>
      <img
        className='h-full object-cover w-[50%] pointer-events-none'
        src={img}
        alt='img'
      />
      <div className='w-[50%]  bg-primary/[0.1] flex items-center justify-start  '>
        <div className='ml-[40px] flex flex-col justify-center items-start'>
          <h1 className='font-heading capitalize text-6xl  font-semibold pointer-events-none'>
            {heading}
          </h1>
          <p className='max-w-[600px] my-6 text-lg pointer-events-none'>
            {description}
          </p>
          <Button primary text='Discover More' />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
