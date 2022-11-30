import React from 'react';
import facebook_icon from '../assets/icons/facebook.png';
import twitter_icon from '../assets/icons/twitter.png';
import instagram_icon from '../assets/icons/instagram.png';
import youtube_icon from '../assets/icons/youtube.png';
import linkedin_icon from '../assets/icons/linkedin.png';
import appStore_icon from '../assets/icons/appStore-icon.png';
import playStore_icon from '../assets/icons/playStore-icon.png';
import '../styles/Footer_privacy.scss';

const Footer_privacy = () => {
    return (
        <div className='footer-privacy'>
            <div className='footer-privacy_text'>
                <h1>© 2022 Kawasaki Motors Corp</h1>
                <p>
                    U.S.A. Your Privacy Rights CA Privacy Rights
                </p>
                <p>
                    Terms of Use About Ads Do Not Sell My Personal Information
                </p>
            </div>
            <div className='footer-privacy_app-section'>
                <h2>download the kawasaki connect app:</h2>
                <div className='footer-privacy_app-icons'>
                    <img src={appStore_icon} alt="app store icon" />
                    <img src={playStore_icon} alt="google play icon" />

                </div>

            </div>
            <ul className='footer-privacy_social-media-list'>
                <li>
                    <a href="https://www.facebook.com/kawasaki">
                        <img src={facebook_icon} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/KawasakiUSA">
                        <img src={twitter_icon} alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/KawasakiUSA/">
                        <img src={instagram_icon} alt="instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/c/KawasakiUSA">
                        <img src={youtube_icon} alt="youtube" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/kawasaki-motors-corp.-u.s.a./">
                        <img src={linkedin_icon} alt="linkedin" />
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default Footer_privacy;