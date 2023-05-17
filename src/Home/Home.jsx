import React from 'react';
import NavBar from '../Shared/NavBar';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCat from './ShopByCat';
import Research from './Research';

const Home = () => {
    return (
        <div>
         
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCat></ShopByCat>
            <Research></Research>
        </div>
    );
};

export default Home;