import React from 'react';
import Footer_mobile from '../layouts/Footer_mobile';
import Header from '../layouts/Header';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <div className='layout'>{children}</div>
            <Footer_mobile />
        </div>

    );
}

export default Layout;