import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../addToCart/CartContext';

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleConfirmPurchase = () => {
        // Here you can send the order to the backend
        console.log('Shipping Info:', shippingInfo);
        console.log('Payment Info:', paymentInfo);
        console.log('Cart:', cart);

        // Clear the cart after purchase
        clearCart();
        // Navigate to order confirmation page
        navigate('/confirmation');
    };

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>

            {/* Cart Summary */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
                <ul className="divide-y divide-gray-200">
                    {cart.map(item => (
                        <li key={item.id} className="flex justify-between items-center py-4">
                            <div>
                                <h4 className="text-gray-800">{item.name}</h4>
                                <p className="text-gray-600">{item.quantity} x ${item.price.toFixed(2)}</p>
                            </div>
                            <p className="text-gray-800 font-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                        </li>
                    ))}
                </ul>
                <div className="text-right font-bold text-lg mt-4">Total: ${totalPrice.toFixed(2)}</div>
            </div>

            {/* Shipping Information */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Shipping Information</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={shippingInfo.name}
                        onChange={handleShippingChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={shippingInfo.address}
                        onChange={handleShippingChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={shippingInfo.postalCode}
                        onChange={handleShippingChange}
                        className="border p-2 rounded w-full"
                    />
                </div>
            </div>

            {/* Payment Information */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Payment Information</h3>
                <div className="grid grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={paymentInfo.cardNumber}
                        onChange={handlePaymentChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="expirationDate"
                        placeholder="Expiration Date (MM/YY)"
                        value={paymentInfo.expirationDate}
                        onChange={handlePaymentChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentChange}
                        className="border p-2 rounded w-full"
                    />
                </div>
            </div>

            {/* Confirm Purchase */}
            <div className="text-right">
                <button
                    onClick={handleConfirmPurchase}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
                >
                    Confirm Purchase
                </button>
            </div>
        </div>
    );
};

export default Checkout;
