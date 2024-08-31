import React from 'react';
import { CartProvider } from './store/CartContext';
import ProductList from './ProductList';
import Cart from './Cart';
import Total from './Total';

const CartApp = () => {
    return (
        <CartProvider>
            <div style={{ padding: '20px' }}>
                <h1>Shopping Cart</h1>
                <ProductList />
                <Cart />
                <Total />
            </div>
        </CartProvider>
    );
};

export default CartApp;
