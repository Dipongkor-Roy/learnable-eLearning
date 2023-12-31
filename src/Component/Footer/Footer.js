import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer ml-1 lg:ml-[7%] mt-[65px] p-10 bg-base-100 text-base-content w-10/11">
        <div>
          <span className="footer-title">Services</span> 
          <Link className="link link-hover">Branding</Link> 
          <Link className="link link-hover">Design</Link> 
          <Link className="link link-hover">Marketing</Link> 
        
        </div> 
        <div>
          <span className="footer-title">Learnable</span> 
          <Link className="link link-hover">About us</Link> 
          <Link className="link link-hover">Contact</Link> 
          <Link className="link link-hover">Jobs</Link> 
          
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
           <Link className="link link-hover">Terms of use</Link> 
           <Link className="link link-hover">Privacy policy</Link> 
          
        </div> 
        <div>
          <span className="footer-title">Newsletter</span> 
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Subscribe To Our NewsLatter</span>
            </label> 
            <div className="relative w-4/5">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="btn text-white font-normal absolute top-0 right-0 rounded-l-none bg-gradient-to-r from-indigo-300 via-slate-800 hover:via-slate-900">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;