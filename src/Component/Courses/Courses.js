import React from 'react';
import { FaHome,FaGraduationCap } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses=useLoaderData();
    console.log(courses);
    return (
        <div className='mt-2 flex flex-row'>
        <div className='mt-0 row-span-1 bg-indigo-100  h-[100em] sm:block hidden'>
         <p className='text-left m-[45px] text-1xl font-semibold'>Short Menu</p>
         <div className='flex flex-col'>
       <Link to='/'><button className='mx-[45px] text-left font-medium flex items-center'><FaHome/><span className='ml-1'>Home</span></button></Link> 
       <Link to='/blog'><button className='mx-[45px] mt-1 text-left font-medium flex items-center'><FaGraduationCap/><span className='ml-1'>Blog</span></button></Link> 
         </div>
        </div>
        {/* courses section */}
        <div className="my-[5vh] max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          
       <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:gap-[75px] gap-10'>
       {
            courses.map(course=><CourseCard 
            key={course.id}
            course={course}
            ></CourseCard>)
           }

       </div>
     
        </div>
        </div>
    );
};

export default Courses;