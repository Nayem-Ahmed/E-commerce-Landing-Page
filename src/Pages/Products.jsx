
import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [minRating, setMinRating] = useState(0);

    useEffect(() => {
        fetch('/allproducts.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        filterProducts();
    }, [category, minRating]);

    const filterProducts = () => {
        let filtered = products;

        if (category) {
            filtered = filtered.filter(product => product.category.toLowerCase() === category.toLowerCase());
        }
        if (minRating !== null) {
            filtered = filtered.filter(product => product.rating >= minRating);
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="mx-auto py-12 px-5">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

            <div className="mb-8 flex gap-5 justify-end">
                {/* Category Filter */}
                <select value={category} onChange={e => setCategory(e.target.value)} className="p-2 border rounded">
                    <option value="">All Categories</option>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="electronics">Electronics</option>
                </select>

                {/* Rating Filter */}
                <select value={minRating} onChange={e => setMinRating(Number(e.target.value))} className="p-2 border rounded">
                    <option value={0}>All Ratings</option>
                    <option value={1}>1 Star & Up</option>
                    <option value={2}>2 Stars & Up</option>
                    <option value={3}>3 Stars & Up</option>
                    <option value={4}>4 Stars & Up</option>
                    <option value={5}>5 Stars</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <Link to={`/product_details/${product.id}`} key={product.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
                        <img src={product.images} alt={product.name} className="w-full h-52 object-cover" />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-700 mb-4 overflow-hidden">{product.description}</p>
                            <div className="mt-auto flex justify-between items-center">
                                <Rating style={{ maxWidth: 150 }} value={product?.rating} readOnly />
                                <div className="text-lg font-bold">$ {product.price}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;
