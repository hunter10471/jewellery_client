import React from 'react';
import Button from '../Button';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const NavList = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className='gap-2 hidden lg:flex lg font-heading font-medium'>
        <Button onClick={() => navigate('/products')} text='Products' ghost />
        <Button text='Location' ghost />
        <Button text='About Us' ghost />
      </ul>
      <div className='dropdown dropdown-hover lg:hidden'>
        <label tabIndex={0}>
          <Button
            text={<BiMenuAltLeft fontSize={20} />}
            ghost
            className='btn-circle'
          />
        </label>
        <ul
          tabIndex={0}
          className=' dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40'
        >
          <Button onClick={() => navigate('/products')} text='Products' ghost />
          <Button text='Location' ghost />
          <Button text='About Us' ghost />
        </ul>
      </div>
    </>
  );
};

export default NavList;
