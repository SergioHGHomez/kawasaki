import React from 'react';
import Register from '../components/Register';
import SignIn from '../components/SignIn';
import '../styles/My_kawasaki.scss';

const My_kawasaki = () => {
    return ( 
        <section className='my-kawasaki' id='main'>
            <h1>my kawasaki</h1>
            <SignIn />
            <Register />
        </section>
        );
}
 
export default My_kawasaki;