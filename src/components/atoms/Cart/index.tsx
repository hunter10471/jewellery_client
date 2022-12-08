import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../feature/store';
import Button from '../Button';
const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/cart')}
      title='cart'
      className='mx-2 flex items-center justify-end relative'
    >
      {cartState.items.length > 0 && (
        <span className=' bg-primary h-[15px] w-[15px] flex items-center justify-center absolute right-[-2px] top-[2px] rounded-full p-3 text-sm text-white font-bold'>
          {cartState.items.length}
        </span>
      )}
      <Button
        className='btn btn-circle btn-ghost'
        text={<AiOutlineShoppingCart fontSize={22} />}
      />
    </div>
  );
};

export default Cart;
