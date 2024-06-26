import React from 'react';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$10.00',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$20.00',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$30.00',
            image: 'https://via.placeholder.com/150',
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-700">{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
