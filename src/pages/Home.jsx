import React from 'react';
import Home_banner from '../containers/Home_banner';
import Offers from '../containers/Offers';
import Featured from '../containers/Featured';
import '../styles/Home.scss';

const Home = () => {
    return (
        <main className='home' id='main'>
            <h1 className='home_principal-heading'>kawasaki</h1>
            <Home_banner />
            <Offers />
            <Featured />
        </main>
    );
}

export default Home;