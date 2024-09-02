import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const handlePurchase = () => {
        navigate('/checkout');
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <ul className="divide-y divide-gray-200">
                    {cart.map((item) => {
                        // Ensure item.price is a number
                        const price = Number(item.price) || 0;

                        return (
                            <li key={item.id} className="flex justify-between items-center py-4">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-gray-600">{item.quantity} x ${price.toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="ml-4 bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700 transition duration-200"
                                >
                                    Remove
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
            <div className="mt-4 flex justify-end">
                <button
                    onClick={handlePurchase}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
