import React from 'react';
import '../styles/Footer.scss';
import Footer_desktop from './Footer_desktop';
import Footer_mobile from './Footer_mobile';
import Footer_privacy from '../components/Footer_privacy';

const Footer = () => {
    return (
        <>
            <Footer_mobile />
            <Footer_desktop />
            <Footer_privacy />
        </>
    );
}

export default Footer;