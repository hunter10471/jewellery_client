import React from 'react';
import { IoDiamondSharp } from 'react-icons/io5';

type Props = {};

const Logo = (props: Props) => {
  return (
    <h1 className='text-4xl font-heading font-bold uppercase relative'>
      <b className='text-primary font-heading'>Qu</b>eens
      <i className='absolute right-[-15px] bottom-[-2px] rotate-[25deg] text-primary'>
        <IoDiamondSharp fontSize={15} />
      </i>
    </h1>
  );
};

export default Logo;
