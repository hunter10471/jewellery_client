import React, { useState, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

type Props = {};

const SearchBar = (props: Props) => {
  const [inputSize, setInputSize] = useState(0);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const onSearchFocus = () => {
    setInputSize((prev) => (prev === 100 ? 0 : 100));
    searchRef.current?.focus();
  };
  return (
    <div className='hidden lg:flex w-fit gap-2 justify-end items-center '>
      <button
        onClick={onSearchFocus}
        title='search'
        className='btn btn-circle btn-ghost'
      >
        <BsSearch fontSize={20} />
      </button>
      <input
        ref={searchRef}
        onBlur={() => setInputSize(0)}
        type='search'
        placeholder='Search'
        className={`input-bordered input  input-primary transition-all duration-300 ease-in-out  ${
          inputSize === 0 ? 'opacity-0 w-[0%]' : 'opacity-100 w-[100%]'
        } `}
      />
    </div>
  );
};

export default SearchBar;
