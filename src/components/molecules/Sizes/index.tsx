import React, { useState } from 'react';

enum SizesType {
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extraLarge',
  extraExtraLarge = 'extraExtraLarge',
}

const Sizes = () => {
  const [size, setSize] = useState<SizesType>(SizesType.small);
  return (
    <div className='mt-10 mb-1 max-w-[400px]'>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold uppercase text-gray-700'>Select Size</h3>
        <h4 className='text-primary font-medium btn btn-link btn-sm capitalize'>
          Size Chart
        </h4>
      </div>
      <div className='flex gap-4 mt-4'>
        <span
          onClick={() => setSize(SizesType.small)}
          className={`btn btn-circle ${
            size === SizesType.small ? ' btn-primary text-white' : 'btn-ghost'
          }`}
          role='button'
        >
          S
        </span>
        <span
          onClick={() => setSize(SizesType.medium)}
          className={`btn btn-circle ${
            size === SizesType.medium ? ' btn-primary text-white' : 'btn-ghost'
          }`}
          role='button'
        >
          M
        </span>
        <span
          onClick={() => setSize(SizesType.large)}
          className={`btn btn-circle ${
            size === SizesType.large ? ' btn-primary text-white' : 'btn-ghost'
          }`}
          role='button'
        >
          L
        </span>
        <span
          onClick={() => setSize(SizesType.extraLarge)}
          className={`btn btn-circle ${
            size === SizesType.extraLarge
              ? ' btn-primary text-white'
              : 'btn-ghost'
          }`}
          role='button'
        >
          XL
        </span>
        <span
          onClick={() => setSize(SizesType.extraExtraLarge)}
          className={`btn btn-circle ${
            size === SizesType.extraExtraLarge
              ? ' btn-primary text-white'
              : 'btn-ghost'
          }`}
          role='button'
        >
          XXL
        </span>
      </div>
      <h6 className='text-error font-bold  m-1 mt-4 '>3 left in stock</h6>
    </div>
  );
};

export default Sizes;
