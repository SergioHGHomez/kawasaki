import React from 'react';
import Footer_mobile from '../layouts/Footer_mobile';
import Header from '../layouts/Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='layout'>{children}</div>
            <Footer_mobile />
        </>

    );
}

export default Layout;