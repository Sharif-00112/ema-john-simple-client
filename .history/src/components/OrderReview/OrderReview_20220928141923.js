import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const {user} = useAuth();

    const handleRemove = key =>{
        console.log(key);
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }

    const navigation = useNavigate();

    const handlePlaceOrder = () =>{
        const submittedCart = {
            userData: user.email,
            cartData: cart
        }
        fetch('http://localhost:3001/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(submittedCart)
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result);
            if(result.insertedId){
                alert('Order Placed');
            }
        })

        navigation('/placeorder');
        setCart([]);
        clearTheCart();
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem 
                        key = {product.key}
                        product={product}
                        handleRemove = {handleRemove}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;