import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:3005/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    } ,[user.email])

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