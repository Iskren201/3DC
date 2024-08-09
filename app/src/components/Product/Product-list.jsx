import React, { useState, useEffect } from 'react';
import { useCart } from '../addToCart/CartContext'; // Correct import path

const ProductList = ({ filters }) => { // Receive filters as props
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart(); // Access context function

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const queryParams = new URLSearchParams(filters).toString();
                const response = await fetch(`http://localhost:3000/products?${queryParams}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [filters]); // Re-fetch products when filters change

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <img
                        src={product.imageUrl ? `http://localhost:3000/uploads/${product.imageUrl}` : 'https://via.placeholder.com/150'}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-200">{product.name}</h3>
                    <p className="text-gray-200">{product.price}</p>
                    <p className="text-gray-200">{product.description}</p>
                    <p className="text-gray-200">Stock: {product.stock}</p>
                    <button
                        onClick={() => addToCart(product, addToCart)}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

