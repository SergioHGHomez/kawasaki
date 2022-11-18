import React from 'react';
import SearchBarMobile from './SearchBar_mobile';
import user_icon from '../assets/icons/account.png';
import cart_icon from '../assets/icons/shopping-cart.png';
import shopping_icon from '../assets/icons/shopping-bag.png';
import road_icon from '../assets/icons/left-intersection.png';
import location_icon from '../assets/icons/pin.png';
import '../styles/Menu_desktop.scss';

const Menu_desktop = () => {
    return (
        <ul className="Menu-desktop">
            <li className='Menu-desktop_item'>
                <img src={user_icon} alt="" />
                <p>My kawasaki</p>
            </li>
            <li className='Menu-desktop_item'>
                <img src={cart_icon} alt="" />
                <p>Cart</p>
                <p>(2)</p>
            </li>
            <li className='Menu-desktop_item'>
                <img src={shopping_icon} alt="" />
                <p>wishlist</p>
            </li>
            <li className='Menu-desktop_item'>
                <img src={road_icon} alt="" />
                <p>test ride</p>
            </li>
            <li className='Menu-desktop_item'>
                <img src={location_icon} alt="" />
                <p>locate a dealer</p>
            </li>
            <li className='Menu-desktop_item'>
                <SearchBarMobile />
            </li>
        </ul>
     );
}
 
export default Menu_desktop;