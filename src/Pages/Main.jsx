import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className='px-20 py-5 bg-slate-900'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;