import React from 'react';
import rightArrow_icon from '../assets/icons/right_arrow.png';
import '../styles/DiscBox.scss';

const DiscBox = () => {
    return (
        <article className='diskBox'>
            <h3>apply discount</h3>
            <form className='diskBox_form'>
                <h4>promo code</h4>
                <input type="text" />
                <button>
                    <img src={rightArrow_icon} alt="left arrow" aria-hidden="true" />
                    <p>
                        apply
                    </p>
                </button>
            </form>
            <div className='diskbox_subtotal-section'>
                <h4>subtotal (2 items)</h4>
                <p className='diskbox_subtotal-value'>$475.85</p>
                <p className='diskbox_subtotal-info'>excluding tax and shipping</p>
            </div>
            <button>
                <img src={rightArrow_icon} alt="right arrow" />
                <p>check out</p>
            </button>

            <div className='diskBox_disclaimer'>
                <p>
                    <b>WARNING:</b> Cancer and reproductive harm www.P65Warnings.ca.gov
                </p>
                <p>
                    <b>SHIPPING INFORMATION</b>
                </p>
                <p>
                    Most items ship to dealer within 5-7 business days for free. Special dealer only items may be excluded.

                    Additional shipping charges apply to qualified ship to home orders.

                </p>
                <p>
                    <b> 
                        TM & © 2022 PARAMOUNT PICTURES. ALL RIGHTS RESERVED.
                    </b>
                </p>

            </div>

        </article>
    );
}

export default DiscBox;