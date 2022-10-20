import React from 'react';

interface IBestSeller {
  title: string;
  img: string;
  price: string;
}

const BestSellerItem = ({ title, img, price }: IBestSeller) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img className='h-[280px] w-full object-cover' src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {title}
          <div className='badge badge-primary'>NEW</div>
        </h2>
        <h3 className='text-lg font-medium text-gray-700'>$ &nbsp; {price}</h3>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Jewellery</div>
          <div className='badge badge-outline'>Products</div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerItem;
