import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/allproducts.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="mx-auto py-12 px-5">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8">
                {products.map(product => (
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
