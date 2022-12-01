import React from 'react';
import '../styles/Offert_card.scss';

const Offert_card = () => {
    return (
        <article className='offert-card'>
            <div className='offert-card_image'>
                <img src="https://www.revzilla.com/blog_content_image/image/61497/redline_hero/Kawasaki_KLX230R_and_KLX300R_First_Ride_Review.jpg" alt="two persons each one on a klx 250 kawasaki motorbike" />
                <div className='offert-card_image-text'>
                    <h2>save up to $2,000</h2>
                    <h3>on kx motorcycles</h3>
                </div>
            </div>
            <div className='offert-card_info'>
                <h2>'tis the season</h2>
                <p>
                    *model & year exclusions apply. incentives are available at participating kawasaki dealerships. offer valid throught 12/13/22. subject to change without notice. offer available on approved purchases of select new, unregistered kawasaki vehicles, professional riders on a closed course.
                </p>
                <h3>
                    valid through: dec 31, 2022
                </h3>
            </div>
        </article>
    );
}

export default Offert_card;