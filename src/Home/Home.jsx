import React from 'react';
import NavBar from '../Shared/NavBar';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCat from './ShopByCat';
import Research from './Research';
import AnimatedSec from './AnimatedSec';

const Home = () => {
    return (
        <div>
         
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCat></ShopByCat>
            <Research></Research>
            <AnimatedSec></AnimatedSec>
        </div>
    );
};

export default Home;