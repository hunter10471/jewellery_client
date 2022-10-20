import React from 'react';

interface IStoryCard {
  title: string;
  img: string;
  description: string;
}

const StoryCard = ({ title, img, description }: IStoryCard) => {
  return (
    <div className='card w-96 bg-base-100 shadow-none rounded-none'>
      <figure>
        <img
          className='w-full h-[400px] object-cover'
          src={img}
          alt='jewellery'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title font-heading text-2xl font-semibold'>
          {title}
        </h2>
        <p className='text-sm font-medium text-gray-700 tracking-wide leading-[25px]'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
