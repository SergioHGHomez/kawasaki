import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <a href="#main" className='header_skip-link'>go to the main content</a>
            <Navbar />
        </header>

    );
}

export default Header;