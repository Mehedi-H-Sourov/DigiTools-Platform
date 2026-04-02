import React from 'react';
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
    return (
        <>

            <footer className=" bg-gray-800 p-8">
                <div className="grid  gap-5 md:grid-cols-5  mx-auto  text-gray-400 mb-1  p-20">
                    <div>
                        <h1 className='text-5xl font-bold text-purple-600 mr-2'>DigiTools</h1>
                        <br />
                        <p>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title text-white">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title text-white">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title text-white">Resources</h6>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Documentation</a>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <h6 className='footer-title text-white'>Social Links</h6>
                        <div className='flex gap-4 '>
                            <img src={linkedin} alt="" className=' bg-gray-100 rounded-full p-2 w-fit h-10' />
                            <img src={facebook} alt="" className=' bg-gray-100 rounded-full p-2 w-fit h-10' />
                            <img src={twitter} alt="" className=' bg-gray-100 rounded-full p-2 w-fit h-10' />
                        </div>
                    </div>

                </div>


                <div className=' '>
                    <div className="divider text-gray-500">© 2026 Digitools. All rights reserved.</div>
                </div>

            </footer>








        </>
    );
};

export default Footer;