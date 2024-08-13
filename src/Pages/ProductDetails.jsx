import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const loaderData = useLoaderData();
    const  products = loaderData.find(pro => pro.id == productId);
    console.log(products);

    return (
 
        <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div >
                    {/* Product Image */}
                    <img src={products?.images} alt={products?.name} className="w-full h-[400px]  object-cover" />
                </div>
                <div>
                    {/* Product Name */}
                    <h1 className="text-3xl font-bold mb-2">{products.category}</h1>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <Rating style={{ maxWidth: 150 }} value={products.rating} readOnly />
                    </div>

                    {/* Price */}
                    <p className="text-xl font-semibold mb-2">${products.price}</p>

                    {/* Description */}
                    <p className="mb-4">{products.description}</p>

                    {/* Specifications */}
                    <p className="font-bold mb-2">Specifications:</p>
                    <ul className="list-disc list-inside mb-4">
                        {products.specifications?.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>

                    {/* Availability */}
                    <p className="font-bold mb-2">Availability:</p>
                    <p className="mb-4">{products.availability}</p>
                    <button className="px-6 py-2 text-lg font-medium text-white bg-[#0097e6] rounded-lg hover:bg-blue-700 transition duration-300">
                         Add to Cart
                    </button>
                </div>
 
                
            </div>

      
          
        </div>
    );
};

export default ProductDetails;