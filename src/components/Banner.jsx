import React from 'react';
import banner from '../assets/banner.png';
import { IoIosInformationCircle } from "react-icons/io";
import { CgPlayButtonO } from "react-icons/cg";

const Banner = () => {
    return (
        <div className='flex justify-center mx-auto gap-6 py-10'>
            <div className='banner-left space-y-6'>
                <div className='flex gap-1.5 items-center bg-base-300 w-fit px-4 py-4 rounded-full text-fuchsia-700 mb-6 mt-20'>
                    <IoIosInformationCircle />
                    <h4>  New: AI Powered Tools Available</h4>
                </div>
                <h1 className='text-6xl font-bold'>Supercharge Your
                    <br />
                    Digital Workflow</h1>

                <p>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>
                <div>
                    <button className='btn btn-primary rounded-full'>Explore Products</button>
                    <button className='btn btn-outline ml-4 rounded-full'> <CgPlayButtonO />Watch Demo</button>
                </div>

            </div>

            <div className='banner-right'>
                <img src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;