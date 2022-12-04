import React from 'react';

interface IRatingProps {
  rating?: {
    rate: number;
    count: number;
  };
}

const Rating = ({ rating }: IRatingProps) => {
  return (
    <div className='w-fit'>
      <div className='rating flex items-center'>
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
          defaultChecked={(rating?.rate || 1) > 1 && (rating?.rate || 2) < 2}
        />
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
          defaultChecked={(rating?.rate || 2) > 2 && (rating?.rate || 3) < 3}
        />
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
          defaultChecked={(rating?.rate || 3) > 3 && (rating?.rate || 4) < 4}
        />
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
          defaultChecked={(rating?.rate || 4) > 4 && (rating?.rate || 5) < 5}
        />
        <input
          type='radio'
          name='rating-2'
          className='mask mask-star-2 bg-orange-400'
          defaultChecked={(rating?.rate || 4.8) > 4.8}
        />
        <h4 className='font-bold ml-2 mt-1'>{rating?.rate}</h4>
      </div>
      <h5 className='font-bold text-gray-400 '>{rating?.count}+ reviews</h5>
    </div>
  );
};

export default Rating;
