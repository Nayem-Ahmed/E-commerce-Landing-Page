import React from 'react';
import banner from '../assets/banner.jpg'
import './banner.css'
const Banner = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="text-center text-white">
                    <h1 className="animated-gradient-text md:text-5xl font-bold mb-4">Discover the Latest Fashion Trends</h1>
                    <p className="md:text-2xl mb-8">Shop the newest arrivals and enjoy exclusive offers.</p>
                    <button className="px-6 py-3 text-lg font-medium text-white bg-[#0097e6] rounded-lg hover:bg-blue-700 transition duration-300">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
