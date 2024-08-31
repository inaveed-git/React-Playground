import React from 'react';
import { useCart } from './store/CartContext';

const Total = () => {
    const { state } = useCart();

    const totalPrice = state.cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Total Price: ${totalPrice}</h2>
        </div>
    );
};

export default Total;
