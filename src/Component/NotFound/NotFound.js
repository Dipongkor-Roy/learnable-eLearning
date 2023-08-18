import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-indigo-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold font-mono">404</h1>
            <p className="m-3 text-3xl font-mono">Not Found</p>
       <Link to='/'><button className="btn border-none bg-indigo-400 hover:bg-indigo-500 text-white ">Go To Home</button></Link>
          </div>
        </div>
      </div>
    );
};

export default NotFound;