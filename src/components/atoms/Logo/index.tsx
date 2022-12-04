import React from 'react';
import { IoDiamondSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <h1 className='text-4xl font-heading font-bold uppercase relative'>
        <b className='text-primary font-heading'>Qu</b>eens
        <i className='absolute right-[-15px] bottom-[-2px] rotate-[25deg] text-primary'>
          <IoDiamondSharp fontSize={15} />
        </i>
      </h1>
    </Link>
  );
};

export default Logo;
