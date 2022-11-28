import React from 'react';
import '../styles/Footer_desktop.scss';
import arrow_icon from '../assets/icons/right_arrow_black.png';

const Footer_desktop = () => {
    return (
        <footer className='footer-desktop'>
            <div className='footer-desktop_section'>
                <h2>about kawasaki</h2>
                <div className='footer-desktop_list-group'>
                    <ul>
                        <li>
                            kawasaki history
                        </li>
                        <li>
                            kawasaki companies
                        </li>
                        <li>
                            international sites
                        </li>
                    </ul>

                    <ul>
                        <li>
                            kawasaki technology
                        </li>
                        <li>
                            legal policies
                        </li>
                        <li>
                            corporate carrers
                        </li>
                        <li>
                            manufacturing careers
                        </li>
                        <li>
                            transparency in coverage
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-desktop_section'>
                <h2>RESOURCES</h2>
                <div className='footer-desktop_list-group'>
                    <ul>
                        <li>
                            Corporate Contact Info
                        </li>
                        <li>
                            Kawasaki Support
                        </li>
                        <li>
                            Safety Resources
                        </li>
                    </ul>

                    <ul>
                        <li>
                            Racing Contingency
                        </li>
                        <li>
                            Industry Links
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-desktop_section'>
                <h2>STAY CONNECTED</h2>
                <div className='footer-desktop_list-group'>
                    <ul>
                        <li>
                            Receive the latest news, special offers and exclusives.
                        </li>
                        <li>
                            <button className='footer-desktop_button' >
                                <img src={arrow_icon} alt="arrow" />
                                <p>subscribe</p>
                            </button>
                        </li>
                        <li>
                            Manage Subscription Preferences
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-desktop_section'>
                <h2>NEWS</h2>
                <div className='footer-desktop_list-group'>
                    <ul>
                        <li>
                            Awards & Reviews
                        </li>
                        <li>
                            Press Releases
                        </li>
                        <li>
                            Recalls
                        </li>
                    </ul>

                    <ul>
                        <li>
                            Events
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-desktop_section'>
                <h2>DEALER INFO</h2>
                <div className='footer-desktop_list-group'>
                    <ul>
                        <li>
                            Dealer Locator
                        </li>
                        <li>
                            Become a Dealer
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer_desktop;