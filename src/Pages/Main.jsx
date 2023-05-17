import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className='mx-10 '>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;