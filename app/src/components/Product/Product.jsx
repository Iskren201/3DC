import React, { useState } from 'react';
import ProductList from './Product-list';

const Product = () => {
    const [filters, setFilters] = useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        brand: '',
    });

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: checked ? value : '',
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: value,
            }));
        }
    };

    return (
        <div className="max-w-7xl mx-auto mt-6 px-4 h-screen flex">
            <aside className="w-1/4 p-4 bg-gray-800 text-white">
                <h3 className="text-xl font-bold mb-4">Filter Products</h3>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Category</h4>
                    <ul>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="category"
                                value="Category 1"
                                checked={filters.category === 'Category 1'}
                                onChange={handleFilterChange}
                            />
                            <label className="ml-2">Category 1</label>
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="category"
                                value="Category 2"
                                checked={filters.category === 'Category 2'}
                                onChange={handleFilterChange}
                            />
                            <label className="ml-2">Category 2</label>
                        </li>
                        <li className="mb-2">
                            <input
                                type="checkbox"
                                name="category"
                                value="Category 3"
                                checked={filters.category === 'Category 3'}
                                onChange={handleFilterChange}
                            />
                            <label className="ml-2">Category 3</label>
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Price Range</h4>
                    <ul>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="minPrice"
                                value="0"
                                checked={filters.minPrice === '0'}
                                onChange={handleFilterChange}
                            />
                            <label className="ml-2">$0 - $10</label>
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="minPrice"
                                value="10"
                                checked={filters.minPrice === '10'}
                                onChange={handleFilterChange}
                            />
                            <label className="ml-2">$10 - $20</label>
                        </li>
                        <li className="mb-2">
                            <input
                                type="radio"
                                name="minPrice"
                                value="20"
                                checked={filters.minPrice === '20'}
                                onChange={handleFilterChange}
                            />
                            <label className="ml-2">$20 - $30</label>
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Brand</h4>
                    <input
                        type="text"
                        name="brand"
                        value={filters.brand}
                        onChange={handleFilterChange}
                        className="w-full border border-gray-300 p-2 rounded-lg"
                    />
                </div>
            </aside>
            <main className="w-3/4 p-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Shop Products</h2>
                <ProductList filters={filters} />
            </main>
        </div>
    );
};

export default Product;

