import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex-col gap-10 text-3xl flex items-center justify-center font-bold'>
      <h1 className='text-white bg-green-400 p-4 rounded-md w-full text-center'>
        Transaction was successful.
      </h1>
      <Button primary onClick={() => navigate('/')} text={'return to home'} />
    </div>
  );
};

export default Success;
