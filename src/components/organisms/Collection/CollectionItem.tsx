import React, { useState } from 'react';
import Button from '../../atoms/Button';

interface ICollectionItem {
  img: string;
  title: string;
}

const CollectionItem = ({ img, title }: ICollectionItem) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className='relative w-6/12 flex '
    >
      <img className='object-cover w-full  h-[550px]' src={img} alt='gold' />
      <span
        className={`w-full h-full backdrop-blur-sm transition-all duration-300 bg-primary/[0.2] ${
          visible
            ? 'backdrop-opacity-100 opacity-100'
            : 'backdrop-opacity-0 opacity-0'
        } flex flex-col items-center justify-center gap-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10]`}
      >
        <h2 className='font-heading text-3xl font-semibold text-center capitalize pointer-events-none'>
          {title}
        </h2>
        <Button text='View Collection' primary />
      </span>
    </div>
  );
};

export default CollectionItem;
