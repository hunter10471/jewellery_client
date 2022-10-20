import React from 'react';
import { collectionData } from '../../../dummy-data/data';
import CollectionItem from './CollectionItem';

type Props = {};

const Collection = (props: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center text-center gap-8 p-20 '>
        <h1 className='font-heading font-semibold text-5xl max-w-[450px] tracking-wide '>
          Our Collections By Categories
        </h1>
        <p className='max-w-[550px]  text-gray-700'>
          We have a wide range of jewellery items in all categories to help you
          choose the best for your loved ones.
        </p>
      </div>
      <div className='max-w-6xl flex flex-wrap justify-center items-center'>
        {collectionData.map((item, index) => {
          return (
            <CollectionItem title={item.title} img={item.img} key={index} />
          );
        })}
      </div>

      <div></div>
    </div>
  );
};

export default Collection;
