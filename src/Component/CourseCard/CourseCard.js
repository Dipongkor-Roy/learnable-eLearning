import React from 'react';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({course}) => {
    const {id,img,title,desc,ratings,price}=course;
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-sm font-light'>{desc}</p>
 
    <div className="card-actions items-center justify-end ">
    <p className='flex items-center '> <FaStar/> <span className='ml-1'>{ratings}</span></p>
    <p>Price: {price}</p>
      <button  className="btn btn-black">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default CourseCard;