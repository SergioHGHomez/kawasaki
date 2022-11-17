import React from 'react';
import right_icon from '../assets/icons/right_arrow.png';
import '../styles/SignIn.scss';

const SignIn = () => {
    return (
        <form className="SignIn" action="">
            <h2>SIGN IN</h2>
            <p>required fields*</p>
            <label htmlFor="">email address*</label>
            <input type="text" />
            <label htmlFor="">password*</label>
            <input type="text" />
            <div className='SignIn_show-password'>
                <input type="checkbox" name="showPass" id="" />
                <p>show password</p>
            </div>
            <button className='SignIn_submit'>
                <img src={right_icon} alt="right arrow icon" />
                <p>sign in</p>
            </button>
        </form>
    );
}

export default SignIn;