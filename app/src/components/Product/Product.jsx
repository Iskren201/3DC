import React from 'react';

const Product = ({ products }) => {
    if (!Array.isArray(products) || products.length === 0) {
        return <p className="text-center mt-8 text-gray-600">No products available.</p>; // Center text and add top margin
    }

    return (
        <div className="max-w-5xl mx-auto mt-6 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Shop Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-900 font-semibold">${product.price}</span>
                                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
