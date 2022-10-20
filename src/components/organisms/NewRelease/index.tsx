import React from 'react';
import NewReleaseBadge from '../../atoms/Badges/NewRelease';
import Button from '../../atoms/Button';

const img =
  'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const NewRelease = () => {
  return (
    <div className='p-10 flex justify-center'>
      <div className='flex justify-center w-full max-w-6xl'>
        <div className='w-full bg-primary/[0.2] relative flex items-end'>
          <div className='absolute flex flex-col items-end gap-3 left-[100%] top-[40%] translate-x-[-100%] translate-y-[-40%]'>
            <span className='font-heading tracking-widest   text-slate-800 font-medium text-8xl'>
              Spar
            </span>
            <span className='font-heading tracking-widest  text-slate-800 font-medium text-8xl'>
              Clu
            </span>
          </div>
          <NewReleaseBadge />
          <div className='p-8 flex flex-col gap-4'>
            <p className='text-sm font-medium text-gray-700 leading-[25px] max-w-[500px] '>
              Our professional jewellers bring you the best of the best right
              from the deep mountains of South Africa. These jewels are hand
              carved with utmost care and focus that will bring out the true
              beauty within you.{' '}
            </p>
            <Button text='Discover More' className='border-none' primary />
          </div>
        </div>
        <div className='w-full relative'>
          <div className='absolute flex flex-col items-start gap-3 right-[100%] top-[40%] translate-x-[100%] translate-y-[-40%]'>
            <span className='font-heading tracking-widest  font-medium text-8xl text-white'>
              kling
            </span>
            <span className='font-heading tracking-widest font-medium text-8xl text-white'>
              ster
            </span>
          </div>
          <img
            className='w-full object-cover object-top h-[700px] '
            src={img}
            alt='jewellery'
          />
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
