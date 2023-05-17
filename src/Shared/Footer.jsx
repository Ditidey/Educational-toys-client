import React from 'react';
import logo from '../../public/download.png';
import { FaFacebook, FaYoutube, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  bg-base-200 text-base-content shadow-sm ">
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
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    
                    <img src={logo} alt="" width="30" height="30" viewBox="0 0 30 30" />
                    <p className='font-semibold'>Creative Creator Toys <br />Providing reliable educational toys since 2023</p>
                </div>
                <p>Copyright © 2023 - All right reserved by CCT Ltd</p>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
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