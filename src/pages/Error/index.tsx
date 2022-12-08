import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex-col gap-10  h-screen text-3xl flex items-center justify-center'>
      <h1 className='text-white bg-red-400 p-4 rounded-md w-full text-center'>
        Transaction has been cancelled by the user.
      </h1>
      <Button primary onClick={() => navigate('/')} text={'return to home'} />
    </div>
  );
};

export default Error;
