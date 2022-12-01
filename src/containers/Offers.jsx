import React from 'react';
import Offert_card from '../components/Offert_card';
import leftArrow_icon from '../assets/icons/right_arrow.png'
import '../styles/Offert.scss';

const Offers = () => {
    return (
        <section className='offers'>
            <h2>offers & promotions</h2>
            {/* cards */}
            <div className='offers_cards-container'>
                <Offert_card />
                <Offert_card />
                <Offert_card />
            </div>
            <button>
                <img src={leftArrow_icon} alt=""/>
                <p>view all offers</p>
            </button>

        </section>
    );
}

export default Offers;