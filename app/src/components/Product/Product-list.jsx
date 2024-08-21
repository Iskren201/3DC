import React, { useState, useEffect } from 'react';
import { useCart } from '../addToCart/CartContext';

const ProductList = ({ filters }) => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

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
                console.error(error);
            }
        };

        fetchProducts();
    }, [filters]);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert('Product added to cart!');
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg">
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="text-xl font-semibold">${product.price}</p>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
