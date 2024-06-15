import React from 'react';
import Product from './Product';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product A', price: '$10' },
        { id: 2, name: 'Product B', price: '$20' },
        { id: 3, name: 'Product C', price: '$15' },
    ];

    return (
        <div>
            <h1>Product List</h1>
            <Product products={products} />
        </div>
    );
};

export default ProductList;
