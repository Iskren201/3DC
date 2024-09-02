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
                category: checked ? value : '',
            }));
        } else if (type === 'radio') {
            if (name === 'minPrice') {
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    minPrice: value,
                }));
            } else if (name === 'maxPrice') {
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    maxPrice: value,
                }));
            }
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
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Category</h4>
                    <ul>
                        {['Category 1', 'Category 2', 'Category 3'].map((cat) => (
                            <li key={cat} className="mb-2">
                                <input
                                    type="checkbox"
                                    name="category"
                                    value={cat}
                                    checked={filters.category === cat}
                                    onChange={handleFilterChange}
                                />
                                <label className="ml-2">{cat}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Price Range</h4>
                    <ul>
                        {[{ min: 0, max: 10 }, { min: 10, max: 20 }, { min: 20, max: 30 }].map((range) => (
                            <li key={range.min} className="mb-2">
                                <input
                                    type="radio"
                                    name="minPrice"
                                    value={range.min}
                                    checked={filters.minPrice === String(range.min)}
                                    onChange={handleFilterChange}
                                />
                                <label className="ml-2">${range.min} - ${range.max}</label>
                            </li>
                        ))}
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