import React from 'react';
import Featured_card from '../components/Featured_card';
import right_arrow_icon from '../assets/icons/right_arrow.png';
import '../styles/Featured.scss';
import useGetVehicles from '../hooks/useGetVehicles';

const API = "https://kawasaki-api-shh.vercel.app/vehicles";

const Featured = () => {
    const vehicles = useGetVehicles(API)

    console.log(vehicles);

    return (
        <section className='featured' id='main'>
            <h2>featured vehicles</h2>
            <div className='featured_cards-container'>
                {vehicles.map((vehicle) => (<Featured_card vehicle={vehicle}
                />))}
            </div>
            <button>
                <img src={right_arrow_icon} alt="" />
                <p>view all featured vehicles</p>
            </button>
        </section>
    );
}

export default Featured;