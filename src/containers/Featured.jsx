import React from 'react';
import Featured_card from '../components/Featured_card';
import right_arrow_icon from '../assets/icons/right_arrow.png';
import '../styles/Featured.scss';

const Featured = () => {
    let ninja650 = {
        name:"ninja 650 krt edition",
        model_type:"updated 2023",
        category: "sport",
        family: "ninja",
        type: "motorcycle",
        price_info: "MSRP NON-ABS: $8,199 / MSRP ABS: $8,599",
        image: 'https://i.postimg.cc/L5jtm3Zv/card-kawasaki-zx6r.png',
    }
    return (
        <section className='featured' id='main'>
            <h2>featured vehicles</h2>
            <div className='featured_cards-container'>
                <Featured_card vehicle={ninja650} />
                <Featured_card vehicle={ninja650} />
                <Featured_card vehicle={ninja650} />
                <Featured_card vehicle={ninja650} />
                <Featured_card vehicle={ninja650} />
                <Featured_card vehicle={ninja650} />
            </div>
            <button>
                <img src={right_arrow_icon} alt="" />
                <p>view all featured vehicles</p>
            </button>
        </section>
    );
}

export default Featured;