import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {
    return (

        <div className="navbar bg-base-100 shadow-sm w-full mx-auto">
            <div className='navbar-start ml-20'>
                <h1 className='text-4xl font-bold text-purple-700'>DigiTools</h1>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='font-semibold'>Products</a></li>
                    <li><a className='font-semibold'>Features</a></li>
                    <li><a className='font-semibold'>Pricing</a></li>
                    <li><a className='font-semibold'>Resources</a></li>
                    <li><a className='font-semibold'>FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end gap-3 mr-20">
                <span className='text-gray-900'><IoCartOutline /></span>
                <a href="login" className='font-semibold'>login</a>
                <a className="btn btn-primary rounded-full">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;