import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from '../Button';
const Cart = () => {
  return (
    <div title='cart' className='mx-2 flex items-center justify-end'>
      <Button
        className='btn btn-circle btn-ghost'
        text={<AiOutlineShoppingCart fontSize={22} />}
      />
    </div>
  );
};

export default Cart;
