import React from 'react';
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    return ( 
        <div>
            <h2>Congratulations, Your order has been successfully placed!</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;