import React, { useState } from 'react';
import { IProduct } from '../../../interfaces/Product.interface';

interface ICartRowProps {
  item: {
    product: IProduct;
    quantity: number;
  };
}

const CartRow = ({ item }: ICartRowProps) => {
  const [, setAmount] = useState<number>(item.quantity || 1);
  const { quantity, product } = item;
  return (
    <div className='flex m-4 items-center border-b-2 p-4'>
      <img className='h-[200px] w-[200px]' src={product.image} alt='product' />
      <div className='flex justify-between gap-14 w-full'>
        <div className='flex-1'>
          <h4 className='font-medium mb-2 text-lg'>{product.title}</h4>
          <h5 className='font-medium text-gray-500 capitalize'>
            {product.size}
          </h5>
          <h5 className='font-medium text-gray-500 capitalize'>In Stock</h5>
        </div>
        <div>
          <h4 className='font-medium mb-2 text-lg'>Each</h4>
          <h3 className='font-bold '>${product.price}</h3>
        </div>
        <div>
          <h4 className='font-medium mb-2 text-lg'>Quantity</h4>
          <select
            className='p-1 w-[50px]'
            onChange={(e) => setAmount(parseInt(e.target.value))}
            name='quantity'
            defaultValue={quantity}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <h4 className='font-medium mb-2 text-lg'>Total</h4>
          <h3 className='font-bold '>${product.price * quantity}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartRow;
