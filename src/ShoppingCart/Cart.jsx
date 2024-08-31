import React from 'react';
import { useCart } from './store/CartContext';

const Cart = () => {
    const { state, dispatch } = useCart();

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    return (
        <div>
            <h2>Cart</h2>
            {state.cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {state.cart.map((item) => (
                        <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
