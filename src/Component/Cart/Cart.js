import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const course=useLoaderData();
    return (
        <div className='flex items-center lg:flex-row flex-col mt-3 justify-center'>
            <div className='mt-5 w-1/2'>
            <div className="stats bg-indigo-400 text-primary-content items-center">
  
  <div className="stat ">
    <img src={course.img} alt="" className='w-full' />
  </div>
  <div className="stat">
    <div className="stat-title text-white">{course.title}</div>
    <div className="stat-value text-white">{course.price}</div>
    <div className="stat-actions">
      
    </div>
  </div>
  
</div>
            </div>
            <div>
            <div className="card-body ">
              <p className='text-center text-3xl font-medium'>Order Summary</p>
        <div className="my-5">
          <p className='p-2 flex items-center justify-between'>Price: <span>{course.price}</span></p>
          <p className='p-2 flex items-center justify-between'>Handling Charge: <span className='text-green-500'>Free</span></p>
        </div>
        <div className="my-1">
         <p className='text-1xl'>Appy Cuopon Code</p>
         <p className='font-light text-sm'>Have a cupon code? Already in this field and full out</p>
         <input type="text" placeholder="Cuppon" className="mt-2 mb-0 input input-bordered input-info w-full max-w-xs" />
        </div>
        <div className="mt-5">
          <button className="w-full p-2 rounded-xl font-medium bg-indigo-400 hover:bg-indigo-500 text-white">Place Order</button>
        </div>
      </div>
            </div>
        </div>
    );
};

export default Cart;