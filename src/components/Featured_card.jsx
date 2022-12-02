import React from 'react';
import '../styles/Featured_card.scss';

const Featured_card = ({vehicle}) => {
    return ( 
        <article className='featured-card'>
            <img src={vehicle.image} alt={vehicle.name} />
            <p className='featured-card_model-info'>{vehicle.model_type}</p>
            <h3>{vehicle.name}</h3>
            <div className='green-line_price-info'></div>
            <p className='featured-card_price-info'>{vehicle.price_info}</p>
        </article>
     );
}
 
export default Featured_card;