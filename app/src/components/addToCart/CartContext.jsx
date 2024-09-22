import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const updatedCart = [...cart];
        const existingProductIndex = updatedCart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            updatedCart[existingProductIndex].quantity += 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }
        setCart(updatedCart);
    };


    const removeFromCart = (productId) => {
        const updatedCart = [...cart];
        const existingProductIndex = updatedCart.findIndex(item => item.id === productId);

        if (existingProductIndex > -1) {
            const updatedProduct = { ...updatedCart[existingProductIndex] };
            updatedProduct.quantity -= 1;

            if (updatedProduct.quantity <= 0) {
                updatedCart.splice(existingProductIndex, 1);
            } else {
                updatedCart[existingProductIndex] = updatedProduct;
            }

            setCart(updatedCart);
        }
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
