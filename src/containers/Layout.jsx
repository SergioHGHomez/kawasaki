import React from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <div className='layout_main-content'>{children}</div>
            <Footer />
        </div>

    );
}

export default Layout;