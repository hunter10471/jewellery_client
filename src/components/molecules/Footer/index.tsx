import React from 'react';
import { IoIosSend } from 'react-icons/io';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { TfiTwitterAlt } from 'react-icons/tfi';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';

const Footer = () => {
  return (
    <footer className='bg-primary/[0.2] pt-10'>
      <div className='px-10'>
        <h2 className='font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl  my-6 capitalize'>
          Don't miss any update
          <br /> Join our newsletter{' '}
        </h2>
        <div className='relative w-full max-w-[600px]'>
          <input
            className='px-4 py-2 placeholder:font-medium  w-full bg-inherit focus:outline-none focus:border-[#28282B]/[0.8] border-b-2 border-[#28282B]/[0.4] hover:border-[#28282B]/[0.8]'
            type='email'
            placeholder='Enter your email address'
          />
          <i className='absolute right-0 bottom-1 cursor-pointer btn btn-circle btn-ghost'>
            <IoIosSend fontSize={30} />
          </i>
        </div>
      </div>
      <div className='flex flex-wrap gap-6 justify-between items-center mt-16 mb-10 px-10'>
        <Logo />
        <ul className='gap-2 flex flex-wrap font-heading font-medium'>
          <Button text='Products' ghost />
          <Button text='Location' ghost />
          <Button text='About Us' ghost />
        </ul>
        <ul className='gap-4 flex flex-wrap font-heading font-medium'>
          <Button text={<BsFacebook fontSize={25} />} icon ghost />
          <Button text={<BsInstagram fontSize={25} />} icon ghost />
          <Button text={<TfiTwitterAlt fontSize={25} />} icon ghost />
        </ul>
      </div>
      <div className='bg-primary p-1 text-sm text-center text-white text-medium'>
        Copyright &copy; by Queens. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
