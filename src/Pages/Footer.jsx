import React from 'react';
import footerLogo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#353b48] text-white p-5">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center md:text-start">
                <div className="mb-6 md:mb-0">
                    <div className="flex justify-center md:justify-start mb-4">
                        <img src={footerLogo} alt="Footer Logo" className="h-16" />
                    </div>
                    <p className="text-sm">SHOP Industries Ltd. <br /> Providing reliable tech since 1992</p>
                    <div className="mt-4 flex justify-center md:justify-start">
                        <a href="#" className="text-gray-400 hover:text-white mr-4"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-white mr-4"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm">
                        <li className="mb-2"><Link to="/">HOME</Link></li>
                        <li className="mb-2"><Link to="/">MEN</Link></li>
                        <li className="mb-2"><Link to="/">WOMEN</Link></li>
                        <li className="mb-2"><Link to="/">KIDS</Link></li>
                        <li><Link to="/">HOME</Link></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="text-sm">
                        <li className="mb-2"><Link to="/">MEN</Link></li>
                        <li className="mb-2"><Link to="/">WOMEN</Link></li>
                        <li className="mb-2"><Link to="/">KIDS</Link></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Clothing</a></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">123 Main Street, City, Country</p>
                    <p className="text-sm">Email: webdevnayem@gmail.com</p>
                    <p className="text-sm">Phone: +88 01936797600</p>
                </div>
            </div>

            <div className="mt-4">
                <input type="email" placeholder="Your email" className="px-4 py-2 mr-2 w-full sm:w-auto border border-gray-800 focus:outline-none" />
                <button className="px-6 py-2 bg-[#0097e6] text-white hover:bg-gray-700 focus:outline-none">Subscribe</button>
            </div>
            <hr className="my-5" />
            <div className="text-center">
                <p className="text-sm">© {new Date().getFullYear()} SHOP Industries Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
