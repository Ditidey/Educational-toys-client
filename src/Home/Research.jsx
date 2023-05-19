import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <p className='text-center text-white text-5xl font-serif font-bold mt-10 mb-3 shadow-xl'>Research Says</p>
            <p className='text-white text-center mb-5'>More article? <Link to='/blog' className='text-blue-400'>Visit our blog</Link></p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-duration="2000">
                    
                <div className="card card-compact  bg-base-100  ">
                    <figure><img src="https://images.unsplash.com/photo-1680194389231-e88c9a767925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHV6emxlJTIwYW5kJTIwTG9naWMlMjBUb3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Puzzle and Logic Toys</h2>
                        <p> These toys enhance problem-solving abilities, critical thinking, and cognitive skills. They include jigsaw puzzles, brain teasers, and logic games that challenge children to analyze, strategize, and find solutions.</p>
                        <div className="card-actions justify-start">
                            <p>Admin| March 23, 2023</p>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100  ">
                    <figure><img src="https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNvY2lhbCUyMGFuZCUyMEVtb3Rpb25hbCUyMExlYXJuaW5nJTIwKFNFTCklMjBUb3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Social and Emotional Learning (SEL) Toys</h2>
                        <p>  These toys focus on emotional intelligence, empathy, and social skills development. They include board games, role-playing sets, emotion cards, and cooperative play toys that facilitate social interaction, communication, and emotional understanding</p>
                        <div className="card-actions justify-start">
                            <p>Admin| May 11, 2021</p>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100  ">
                    <figure><img src="https://images.unsplash.com/photo-1621419203051-f4e463849784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE11c2ljYWwlMjBJbnN0cnVtZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Musical Instruments</h2>
                        <p>  These toys introduce children to music, rhythm, and sound exploration. They may include toy keyboards, drums, xylophones, and musical activity sets that promote sensory development and auditory skills.</p>
                        <div className="card-actions justify-start">
                            <p>Admin| June 11, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Research;