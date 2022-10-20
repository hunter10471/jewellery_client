import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

const img =
  'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

const Reviews = () => {
  return (
    <div className='p-10 flex justify-center'>
      <div className='flex justify-center w-full max-w-6xl'>
        <div className='w-full relative'>
          <div className='absolute flex flex-col items-end gap-3 left-[100%] top-[40%] translate-x-[-100%] translate-y-[-40%]'>
            <span className='font-heading tracking-widest whitespace-nowrap   text-white font-medium text-8xl'>
              Our Cu
            </span>
            <span className='font-heading tracking-widest  text-white font-medium text-8xl'>
              Rev
            </span>
          </div>
          <img
            className='w-full object-cover object-top h-[700px] '
            src={img}
            alt='jewellery'
          />
        </div>
        <div className='w-full bg-primary/[0.2] relative flex items-end'>
          <div className='absolute flex flex-col items-start gap-3 right-[100%] top-[40%] translate-x-[100%] translate-y-[-40%]'>
            <span className='font-heading tracking-widest  font-medium text-8xl text-slate-800'>
              stomer
            </span>
            <span className='font-heading tracking-widest font-medium text-8xl text-slate-800'>
              iew
            </span>
          </div>

          <p className='flex flex-col gap-4 text-sm font-medium text-gray-700 leading-[25px] max-w-[400px] ml-20 mb-16 relative'>
            <ImQuotesLeft
              className='absolute left-[-50px] top-[-30px]'
              fontSize={40}
            />
            Our professional jewellers bring you the best of the best right from
            the deep mountains of South Africa. These jewels are hand carved
            with utmost care and focus that will bring out the true beauty
            within you.
            <b className='text-lg'>
              <span className='w-[50px] h-[2px] bg-gray-700 absolute bottom-0'></span>
              Julia Henry
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
