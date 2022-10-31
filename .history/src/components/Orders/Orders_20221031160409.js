import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:3005/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res => {
            if(res.status === 200){
                return res.json();
            }
            else if(res.status === 401){
                //redirect to login page (needs to learn)
                alert('Please Login First!');
            }
        })
        .then(data => setOrders(data));
    } ,[])

    return (
        <div>
            <h2>You have placed: {orders.length} Orders</h2>

            <ul>
                {
                    orders.map(order => <li
                        key = {order._id}
                    >Ordered by : {order.userData}</li>)
                }
            </ul>
        </div>
    );
};

export default Orders;