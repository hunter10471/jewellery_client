import React from 'react';
import { OurStoryItems } from '../../../dummy-data/data';
import StoryCard from './StoryCard';

const OurStory = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 my-20'>
      <div className='max-w-6xl flex flex-col items-center my-10'>
        <h1 className='font-heading text-6xl'>Our Story</h1>
        <p className='font-medium text-gray-700 max-w-[600px] tracking-wide text-center my-4 '>
          We have come a long way since we started and it has been a journey of
          sheer will as well as hard-work that has enabled us to serve you with
          the best.
        </p>
      </div>
      <div className='flex flex-wrap gap-4'>
        {OurStoryItems.map((item, index) => (
          <StoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OurStory;
