import React from 'react';
import Logo from '../../atoms/Logo';
import NavList from '../../atoms/NavList';
import SearchBar from '../../atoms/SearchBar';

const Navbar = () => {
  return (
    <nav className='flex justify-center py-4 px-2 shadow-lg'>
      <div className='flex w-full justify-between items-center max-w-[1496px] relative'>
        <NavList />
        <div className='absolute translate-x-[-50%] left-[50%]'>
          <Logo />
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
