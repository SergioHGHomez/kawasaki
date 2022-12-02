import React from 'react';
import '../styles/Home.scss';
import Home_banner from '../containers/Home_banner';
import Offers from '../containers/Offers';
import Featured from '../containers/Featured';

const Home = () => {
    return (
        <main className='home'>
            <Home_banner />
            <Offers />
            <Featured />
        </main>
    );
}

export default Home;