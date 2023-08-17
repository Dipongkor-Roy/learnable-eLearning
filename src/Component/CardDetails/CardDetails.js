import React from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const course = useLoaderData();

  return (
    <div className="mt-3 ">
      <div className="h-[10vh] text-center bg-base-200 ">
        <p className="text-3xl py-5 font-semibold">{course.title}</p>
      </div>
      <div className="my-3 flex lg:flex-row flex-col items-center w-full justify-center">
        <div className="w-1/2 px-2 ">
          <p className="mt-2 text-2xl text-center font-semibold">Overview:</p>
          <p className="mt-2 text-center font-light ">{course.desc}</p>
        </div>
        {/* card */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl lg:mt-0 mt-3">
            <figure>
              <img src={course.img} alt="course" />
            </figure>
            <div className="card-body">
              <p>Price: {course.price}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-indigo-400 hover:bg-indigo-500 text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default CardDetails;
