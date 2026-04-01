import React from 'react';
import user from '../assets/user.png'
import rocket from '../assets/rocket.png'

const GetStarted = () => {
    return (
        <div>
            <div className='text-center mt-10 mb-10 space-y-3.5'>
                <h1 className='text-5xl font-bold '>Get Started in 3 Steps</h1>
                <p className='text-gray-400 text-sm'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='card grid lg:grid-cols-3 max-w-5xl mx-auto gap-2.5 mb-10'>

                <div className='shadow-2xl p-6'>
                    <div className='flex justify-end bg-purple-700 w-fit rounded-full p-4 text-white font-bold'>01</div>
                    <div className='flex justify-center'><img className='h-20 p-4 bg-gray-300 rounded-full' src={user} alt="" /></div>

                    <div className='flex flex-col justify-center text-center space-y-2.5 p-6'>
                        <h3 className='text-2xl font-bold'>Create Account</h3>

                        <p className='text-gray-600 text-sm'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>


                <div className='shadow-2xl p-6'>
                    <div className='flex justify-end bg-purple-700 w-fit rounded-full p-4 text-white font-bold'>02</div>
                    <div className='flex justify-center'><img className='h-20 p-4 bg-gray-300 rounded-full' src={user} alt="" /></div>

                    <div className='flex flex-col justify-center text-center space-y-2.5 p-6'>
                        <h3 className='text-2xl font-bold'>Create Account</h3>

                        <p className='text-gray-600 text-sm'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className='shadow-xl p-6'>
                    <div className='flex justify-end bg-purple-700 w-fit rounded-full p-4 text-white font-bold'>03</div>
                    <div className='flex justify-center'><img className='h-20 p-4 bg-gray-300 rounded-full' src={rocket} alt="" /></div>

                    <div className='flex flex-col justify-center text-center space-y-2.5 p-6'>
                        <h3 className='text-2xl font-bold'>Create Account</h3>

                        <p className='text-gray-600 text-sm'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>






            </div>
        </div>
    );
};

export default GetStarted;