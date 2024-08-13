import React from 'react';
import logo from '../assets/logo.png'
import { FaCartPlus } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Services</a></li>
                    </ul>
                </div>
                <a href='/' className=" text-xl"><img className='w-16' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <span className='text-2xl mr-3'><FaCartPlus ></FaCartPlus></span>
                <button className="px-6 py-2 text-lg font-medium text-white bg-[#0097e6] rounded-lg hover:bg-blue-700 transition duration-300">
                         Login
                    </button>
            </div>
        </div>
    );
};

export default Navbar;