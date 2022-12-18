import React from 'react';
import right_arrow_icon from '../assets/icons/right_arrow.png';
import '../styles/Register.scss';

const Register = () => {
    return (
        <form className='Register'>
            <h2>register</h2>
            <p>required fields*</p>
            <label htmlFor="">email address*</label>
            <input type="text" />
            <label htmlFor="">password (must be at least 8 characters)</label>
            <input type="text" />
            <label htmlFor="">confirm new password*</label>
            <input type="text" />
            <div className='Register_options'>
                <input type="checkbox" name="" id="" />
                <span>Show Password</span>
                <input type="checkbox" name="" id="" />
                <span>sign me up to stay connected with kawasaki via email</span>
                <input type="checkbox" name="" id="" />
                <span>*I verify that I am 13 years or over, a United States resident, and agree to Kawasaki's privacy policy and terms and conditions of use.</span>
            </div>
            <button className='Register_button'>
                <img src={right_arrow_icon} alt="left arrow" aria-hidden="true" />
                <p>register</p>
            </button>
        </form>
    );
}

export default Register;