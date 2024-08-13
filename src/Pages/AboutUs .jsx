import React from 'react';
import { GiClothes } from "react-icons/gi";
import { GiLoincloth } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import about from '../assets/about.webp' 


const AboutUs = () => {
    return (
        <div className='my-10 p-5'>

            <div className='max-w-96 mx-auto text-center mb-6'>
                <h1 className='text-2xl font-bold mb-2'>About us</h1>
                <p className='text-gray-400'>Order now and appreciate the beauty of nature</p>
            </div>

        <div className='flex gap-5 flex-col md:flex-row'>
            <div className='text-center'>
                <div className='bg-[#0097e6] h-16 w-16 rounded-full text-center flex items-center m-auto mb-3' >
                    <GiClothes className='text-center m-auto text-4xl text-white'></GiClothes>
                </div>
                <h1 className='text-2xl font-semibold mb-3'>Large Assortment</h1>
                <p className='text-gray-500'>we offer many different types of products with fewer variations in each category.</p>
            </div>
            <div className='text-center'>
                <div className='bg-[#0097e6] h-16 w-16 rounded-full text-center flex items-center m-auto mb-3' >
                    <GiLoincloth className='text-center m-auto text-4xl text-white'></GiLoincloth>
                </div>
                <h1 className='text-2xl font-semibold mb-3'>Fast & Free Shipping</h1>
                <p className='text-gray-500'>we offer many different types of products with fewer variations in each category.</p>
            </div>
            <div className='text-center'>
                <div className='bg-[#0097e6] h-16 w-16 rounded-full text-center flex items-center m-auto mb-3' >
                    <IoPhonePortraitOutline className='text-center m-auto text-4xl text-white'></IoPhonePortraitOutline>
                </div>
                <h1 className='text-2xl font-semibold mb-3'>24/7 Support</h1>
                <p className='text-gray-500'>we offer many different types of products with fewer variations in each category.</p>
            </div>

        </div>

        <div className=" mt-20 ">
            <div className="mx-auto  ">
  
                <div className="flex gap-8 flex-col lg:flex-row  ">
                    <div className="md:w-1/2 w-full" >
                        <img src= {about} alt="Our Mission" className="w-full h-screen object-cover rounded-md shadow-lg" />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-700 mb-6">
                            At Medicarer, our mission is to provide high-quality, affordable healthcare products to our customers. We believe in empowering individuals to take control of their health and well-being through access to the best medical supplies and equipment.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
                        <p className="text-gray-700 mb-6">
                            We are committed to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li className='mb-3'>Quality: Offering top-notch products that meet the highest standards.</li>
                            <li className='mb-3'>Customer Satisfaction: Ensuring a seamless shopping experience and exceptional customer service.</li>
                            <li className='mb-3'>Integrity: Building trust through transparency and ethical practices.</li>
                            <li>Innovation: Continuously improving and expanding our product range to meet evolving healthcare needs.</li>
                        </ul>
 
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default AboutUs;