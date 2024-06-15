import React, { useState, useEffect } from 'react';
import Product from './Product';
import CreateProduct from './CreateProduct';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []); // Fetch products on initial component load

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products'); // Corrected endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch products.');
            }
            const data = await response.json();
            setProducts(data); // Assuming data is an array of products from API
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addProduct = async (newProduct) => {
        try {
            const response = await fetch('http://localhost:3000/api/products', { // Corrected endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error('Failed to add product.');
            }

            const data = await response.json();
            setProducts([...products, data]); // Assuming data is the newly added product
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please try again.');
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-6 px-4">
            <h1 className="text-3xl font-bold mb-6">Product List</h1>
            <CreateProduct addProduct={addProduct} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
