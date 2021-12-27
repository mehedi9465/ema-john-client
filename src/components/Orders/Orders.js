import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrders(data);
        })
    }, [])

    return (
        <div>
            <h1>Total Orders: {orders.length}</h1>
            {
                orders.map(order => 
                    <ul>
                        <li>{order.name}</li>
                        <li>{order.email}</li>
                    </ul>
                )
            }
        </div>
    );
};

export default Orders;