import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LogIn = () => {
    return (
        <div className="hero mt-4 min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login <span className='text-indigo-400'>now!</span></h1>
            <p className="py-6 font-medium">Log In To explore Learning Platform</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Password" className="input input-bordered" />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-indigo-400 hover:bg-indigo-500 text-white">Login</button>
              </div>
             <div className='text-center font-light'>
                <p>Or <span>Log In Via</span></p>
                <div className='mt-3 flex justify-evenly'>
                <button className="btn text-white  bg-indigo-400 hover:bg-indigo-500"><FaGoogle/> Google</button>
                <button className="btn text-white   bg-indigo-400 hover:bg-indigo-500 ml-5 lg:ml-0"><FaGithub/>Github</button>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;