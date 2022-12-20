import React from 'react';
import Shopping_card from '../components/Shopping_card';
import DiscBox from '../components/DiscBox';
import '../styles/Shopping_cart.scss';

const Shopping_cart = () => {
    return ( 
        <main className='shopping-cart' id='main'>
            <h2>Shopping cart</h2>
            <section>
                <Shopping_card />
                <Shopping_card />
                <Shopping_card />
                <Shopping_card />
            </section>
            <section className='shopping-cart_discbox-wrapper'>
                <DiscBox />
            </section>
        </main>
     );
}
 
export default Shopping_cart;