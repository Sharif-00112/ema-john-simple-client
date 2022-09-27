import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key} = props.product;
    const {handleRemove} = props;
    return (
        <div className='product'>
            {/* 
            <div className="">
                <img src={props.product.img} alt="" />
            </div>
             */}
            <div className="">
                <h5 className='product-name'>{name}</h5>
                <p>Unit Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={ () => handleRemove(key)} className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;