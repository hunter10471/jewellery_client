import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Button from '../../components/atoms/Button';
import CartRow from '../../components/molecules/CartRow';
import { RootState } from '../../feature/store';

const CartPage = () => {
  const products = useSelector((state: RootState) => state.cart);
  return (
    <div className='w-full flex justify-center items-center '>
      <div className='max-w-screen-xl flex flex-col justify-center items-center py-10 px-4'>
        <h1 className='font-heading text-4xl font-bold flex items-center gap-2 my-2'>
          {' '}
          <BsBag fontSize={30} /> My Cart
        </h1>
        <div className='flex w-full justify-between gap-20 my-10'>
          <div className='p-2'>
            {products.items.map((product, index) => (
              <CartRow key={index} item={product} />
            ))}
            <div className='py-4 flex w-full justify-between'>
              <h3 className='text-lg font-medium'>
                {products.items.length} Items
              </h3>
              <h3 className='text-lg font-medium'>${products.total}</h3>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div>
              <label className='text-xs uppercase font-medium text-gray-500'>
                Enter Promo Code
              </label>
              <div className='form-control'>
                <div className='input-group'>
                  <input
                    type='text'
                    placeholder='Promo Code'
                    className='input input-bordered'
                  />
                  <button className='btn btn-square w-fit px-4 bg-primary hover:bg-white hover:text-primary hover:border-primary text-white border-transparent'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className='flex  w-full justify-between my-4 font-medium text-gray-500'>
              <h3>Shipping Cost</h3>
              <h3>TBD</h3>
            </div>
            <div className='flex  w-full justify-between my-4 font-medium text-gray-500'>
              <h3>Discount</h3>
              <h3>-0$</h3>
            </div>
            <div className='flex  w-full justify-between my-4 font-medium text-gray-500'>
              <h3>Tax</h3>
              <h3>TBD</h3>
            </div>
            <div className='flex  w-full justify-between my-4 font-bold  text-xl'>
              <h2>Estimated Total</h2>
              <h2>${products.total}</h2>
            </div>
            <Button
              className='flex items-center gap-1 rounded-md my-8'
              primary
              text={'Checkout'}
            >
              <AiFillLock fontSize={25} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
