import React from 'react';
import ProductList from './Product-list';
// ! Product Filter
const Product = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 px-4 h-screen flex">
            <aside className="w-1/4 p-4 bg-gray-800 text-white">
                <h3 className="text-xl font-bold mb-4">Filter Products</h3>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Category</h4>
                    <ul>
                        <li className="mb-2">
                            <input type="checkbox" id="cat1" />
                            <label htmlFor="cat1" className="ml-2">Category 1</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="cat2" />
                            <label htmlFor="cat2" className="ml-2">Category 2</label>
                        </li>
                        <li className="mb-2">
                            <input type="checkbox" id="cat3" />
                            <label htmlFor="cat3" className="ml-2">Category 3</label>
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Price Range</h4>
                    <ul>
                        <li className="mb-2">
                            <input type="radio" name="price" id="price1" />
                            <label htmlFor="price1" className="ml-2">$0 - $10</label>
                        </li>
                        <li className="mb-2">
                            <input type="radio" name="price" id="price2" />
                            <label htmlFor="price2" className="ml-2">$10 - $20</label>
                        </li>
                        <li className="mb-2">
                            <input type="radio" name="price" id="price3" />
                            <label htmlFor="price3" className="ml-2">$20 - $30</label>
                        </li>
                    </ul>
                </div>
            </aside>
            <main className="w-3/4 p-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Shop Products</h2>
                <ProductList />
            </main>
        </div>
    );
};

export default Product;
