import React from 'react';
import ninja_logo from '../assets/logos/ninja_logo.png';
import sbk_logo from '../assets/logos/worldsbk-sbk-logo.png';
import z_logo from '../assets/logos/z_logo.png';
import old_logo from '../assets/logos/Old-Kawasaki-Logo.png';
import '../styles/Home_banner.scss';

const Home_banner = () => {
    return (
        <section className='home-banner'>
            <div className='home-banner_slider-wrapper'>
                <div className='home-banner_slider'>
                    <div id="home-banner_slide1">
                        <div className='home-banner_image'>
                            <img src="https://images.unsplash.com/photo-1590498886106-6f44f039f87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="photo of the kawasaki ninja zx6r" />
                        </div>
                        <div className='home-banner_text'>
                            <img className='home-banner_logo' src={ninja_logo} alt="kawasaki ninja category logo" />
                            <h2>save up to $1,000* on zx6r</h2>
                            <button>learn more</button>
                            <p>
                                *Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 12/31/22. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Experienced rider under controlled conditions. Do not attempt maneuvers beyond your capability. Accessorized unit shown.

                            </p>
                        </div>
                    </div>
                    <div id="home-banner_slide2">
                        <div className='home-banner_image'>
                            <img src="https://photos.worldsbk.com/2021/09/19/00912_DCP_R9_Action.jpg" />
                        </div>
                        <div className='home-banner_text'>
                            <img className='home-banner_logo' src={sbk_logo} alt="superbikes championship category logo" />
                            <h2>STRATEGIC VICTORY</h2>
                            <h3>JONATHAN REA AND HIS NINJA® ZX™-10RR MASTERED A RACETRACK CHANGING FROM WET TO DRY AND A RARE TIRE CHANGE PIT STOP TO WIN AT THE FINAL ROUND</h3>
                            <button>learn more</button>
                            <p>
                                *Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 12/31/22. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Experienced rider under controlled conditions. Do not attempt maneuvers beyond your capability. Accessorized unit shown.

                            </p>
                        </div>
                    </div>
                    <div id="home-banner_slide3">
                        <div className='home-banner_image'>
                            <img src="https://images.unsplash.com/photo-1587971051803-70bf6d4ae977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="photo of the kawasaki ninja 400" />
                        </div>
                        <div className='home-banner_text'>
                            <img className='home-banner_logo' src={ninja_logo} alt="kawasaki ninja category logo" />
                            <h2>save up to $1,000* on Ninja 400</h2>
                            <button>learn more</button>
                            <p>
                                *Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 12/31/22. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Experienced rider under controlled conditions. Do not attempt maneuvers beyond your capability. Accessorized unit shown.

                            </p>
                        </div>
                    </div>
                    <div id="home-banner_slide4">
                        <div className='home-banner_image'>
                            <img src="https://images.unsplash.com/photo-1611241443322-b5524914fe20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="photo of the kawasaki z400" />
                        </div>
                        <div className='home-banner_text'>
                            <img className='home-banner_logo' src={z_logo} alt="kawasaki ninja category logo" />
                            <h2>save up to $1,000* on Z400</h2>
                            <button>learn more</button>
                            <p>
                                *Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 12/31/22. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Experienced rider under controlled conditions. Do not attempt maneuvers beyond your capability. Accessorized unit shown.

                            </p>
                        </div>
                    </div>
                    <div id="home-banner_slide5">
                        <div className='home-banner_image'>
                            <img src="https://i.postimg.cc/x13KMHMk/hero-victor.jpg" />
                        </div>
                        <div className='home-banner_text'>
                            <img className='home-banner_logo' src={old_logo} alt="old kawasaki logo" />
                            <h2>The new kawasaki victor 150</h2>
                            <button>learn more</button>
                            <p>
                                *Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 12/31/22. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Experienced rider under controlled conditions. Do not attempt maneuvers beyond your capability. Accessorized unit shown.

                            </p>
                        </div>
                    </div>

                </div>
                <nav className='home-banner_nav'>
                    <a href="#home-banner_slide1"></a>
                    <a href="#home-banner_slide2"></a>
                    <a href="#home-banner_slide3"></a>
                    <a href="#home-banner_slide4"></a>
                    <a href="#home-banner_slide5"></a>
                </nav>

            </div>
        </section>
    );
}

export default Home_banner;