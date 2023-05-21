import React, { useEffect } from 'react';
import NavBar from '../Shared/NavBar';
import Aos from 'aos';

const Banner = () => {
    // hero  min-h-screen
    useEffect(()=>{
        Aos.init();
    },[] )
    return (
        <div className="p-8 my-2 shadow-2xl rounded-md" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`, backgroundSize: 'cover' }} data-aos="flip-left"  data-aos-duration="3000">
             <NavBar></NavBar>
            
             
            <div className="hero-content text-center text-neutral-content pt-20" data-aos="fade-up-right"   data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-yellow-200 font-bold">Unlock Your Potential</h1>
                    <p className="mb-5">Fuel your child's imagination and foster their development with our wide range of educational toys. From hands-on learning to cognitive challenges, our carefully curated selection offers endless opportunities for fun and growth.</p>
                    <button className="btn mt-10 px-6 mb-10 bg-blue-700">Free for trial</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;