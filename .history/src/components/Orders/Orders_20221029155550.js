import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3005/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    } ,[])

    return (
        <div>
            <h2>You have placed: {orders.length} Orders</h2>

        </div>
    );
};

export default Orders;