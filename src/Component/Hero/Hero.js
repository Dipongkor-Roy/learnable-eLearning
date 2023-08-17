import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="">
      <div className="hero hero-top bg-base-100">
        <div className=" flex flex-col lg:flex-row ">
          <div className="text-container w-1/2">
            <h1 className="whitespace-nowrap  text-4xl md:text-4xl lg:text-5xl ">
 Find Suitable <br /> courses from the <br /> best mentors
            </h1>
            <p className="py-6 font-light text-medium">
              Discover a world of{" "}
              <span className="text-indigo-400 font-normal">knowlege</span> at
              your fingertips and embark on <br /> a transformative learning
              journey like never before
            </p>
            <div className="down">
              <Link to='/courses'><button className="btn bg-black text-white normal-case px-4 py-3 rounded-2xl hover:bg-black shadow-xl">
                Browse Courses
              </button></Link>
              <button className="lg:mx-3 sm:mx-2 mt-2 btn  text-white normal-case font-thin px-4 py-3 rounded-2xl hover:bg-base bg-gradient-to-r from-indigo-300 via-slate-800 hover:via-slate-900 shadow-xl">
                Become mentor
              </button>
            </div>

            <div className="down-btn">
              <h2>Popular directions</h2>
              <div>
                <button className="mr-2 my-2 btn btn-outline btn-primary normal-case">
                  UX/UI Design
                </button>
                <button className="mr-2 my-2 btn btn-outline  normal-case  btn-success">
                  Illustration
                </button>
                <button className="mr-2 my-2 btn btn-outline  normal-case btn-success">
                  3D & Animation
                </button>
                <button className="lg:mr-2 my-2 btn btn-outline  normal-case btn-warning">
                  Marketing
                </button>
              </div>
            </div>
          </div>
          <div className="mx-[10%] lg:my-0 my-5 w-1/2 ">
            <div className="relative shadow-xl">
              <img
                className="rounded-xl h-4/5 w-full"
                src="https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full  ">
                <div>
                  <h2 className="text-1xl text-white">
                    Illustration Course: Begining
                  </h2>
                  <p className="text-white font-light">Course by UniStudio</p>
                </div>
              </div>
            </div>
            
         
           <div className="my-5 h-1/1 w-full rounded-xl shadow-xl bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-violet-400 to-indigo-400">
              <p className="p-[25px] text-left font-light text-2xl text-white flex items-center">
                Join Our Community{" "}
                <BsFillArrowUpRightCircleFill className="ml-1 mt-[0px]" />
              </p>
              <div className="avatar-group -space-x-6 mx-5 mb-5">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""  />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>108k+</span>
                  </div>
                </div>
              </div>
              <p className="px-5 pb-5 text-2xl text-left font-light text-white">Members</p>
           
            </div>
            
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
