import React from 'react';
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
                            <h2>save up to $1,000* on zx6r</h2>
                            <button>learn more</button>
                            <p>
                                *Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 12/31/22. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Experienced rider under controlled conditions. Do not attempt maneuvers beyond your capability. Accessorized unit shown.

                            </p>
                        </div>
                    </div>
                    <div id="home-banner_slide2">
                        <div className='home-banner_image'>
                            <img src="https://images.unsplash.com/photo-1587971051803-70bf6d4ae977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="photo of the kawasaki ninja 400" /> 
                        </div>
                        <div className='home-banner_text'>
                            <h2>save up to $1,000* on Ninja 400</h2>
                            <button>learn more</button>
                            <p>
                                *Model & year exclusions apply. Incentives are available at participating Kawasaki dealerships. Offer valid through 12/31/22. Subject to change without notice. Offer available on approved purchases of select new, unregistered Kawasaki vehicles. Experienced rider under controlled conditions. Do not attempt maneuvers beyond your capability. Accessorized unit shown.

                            </p>
                        </div>
                    </div>
                    <div id="home-banner_slide3">
                        <div className='home-banner_image'>
                            <img src="https://images.unsplash.com/photo-1611241443322-b5524914fe20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="photo of the kawasaki z400" />
                        </div>
                        <div className='home-banner_text'>
                            <h2>save up to $1,000* on Z400</h2>
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
                </nav>

            </div>
        </section>
    );
}

export default Home_banner;