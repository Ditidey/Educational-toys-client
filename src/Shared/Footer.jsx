import React from 'react';
import logo from '../../public/logo.png';
import { FaFacebook, FaYoutube, FaTwitterSquare, FaLinkedin, FaThumbsUp } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  bg-base-200 text-base-content shadow-sm ps-32">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Subscription</span>
                   <input type="text" className="input   w-full max-w-xs" />
                    <button className="btn  btn-primary">Subscription 
                    <FaThumbsUp className='ms-3 h-5'></FaThumbsUp></button>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 shadow-xl">
                <div className="items-center grid-flow-col">
                    
                    <img src={logo} alt="" width="30" height="30" viewBox="0 0 30 30" />
                    <p  ><span className='font-semibold text-xl'> Creative Creator Toys </span>   <br /> The Multings, Dublin 8, Ireland <br />Providing reliable educational toys since 2023</p>
                    <p className='font-semibold'> </p>
                </div>
                <p className='pt-12 font-thin text-black'>Copyright © 2023 - All right reserved by CCT Ltd</p>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 pt-5">
                         <FaFacebook className='w-6 h-6 text-blue-500'></FaFacebook>
                         <FaLinkedin className='w-6 h-6 text-blue-500'></FaLinkedin>
                         <FaTwitterSquare className='w-6 h-6 text-blue-500'></FaTwitterSquare>
                         <FaYoutube className='w-6 h-6 text-red-500'></FaYoutube>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;