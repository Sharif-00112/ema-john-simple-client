import React from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const {user} = useAuth();

    return (
        <div>
            <h2>This is orders page</h2>

        </div>
    );
};

export default Orders;