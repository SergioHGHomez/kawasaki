import React from 'react';
import '../styles/Footer.scss';
import Footer_desktop from './Footer_desktop';
import Footer_mobile from './Footer_mobile';

const Footer = () => {
    return (
        <>
            <Footer_mobile />
            <Footer_desktop />
        </>
    );
}

export default Footer;