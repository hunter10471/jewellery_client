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
        {Array(5)
          .fill('')
          .map((item, index) => {
            return (
              <input
                type='radio'
                name='rating-2'
                className={`mask mask-star-2   ${
                  Math.floor(rating?.rate || 0) >= index + 1
                    ? 'bg-orange-400'
                    : 'bg-orange-200'
                }`}
              />
            );
          })}

        <h4 className='font-bold ml-2 mt-1'>{rating?.rate}</h4>
      </div>
      <h5 className='font-bold text-gray-400 '>{rating?.count}+ reviews</h5>
    </div>
  );
};

export default Rating;
