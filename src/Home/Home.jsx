import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCat from './ShopByCat';
import Research from './Research';
import AnimatedSec from './AnimatedSec';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('home')
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