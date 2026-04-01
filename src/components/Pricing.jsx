import React from 'react';

const Pricing = () => {
    return (

        <div>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-sm text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='max-w-5xl mx-auto grid lg:grid-cols-3 gap-2.5 mb-10'>
                <div className='parent1 shadow-2xl p-6 rounded-xl bg-gray-100'>
                    <div>
                        <h2 className='text-xl font-bold'>Starter</h2>
                        <p className='text-sm text-gray-500'>Perfect for getting started</p>
                    </div>
                    <div className='py-6'>
                        <p><span className='text-2xl font-bold'>$0</span>/month</p>
                    </div>
                    <div className='text-gray-500 mb-6'>
                        <p> <span className='text-green-400'>✔</span>Access to 10 free tools</p>
                        <p><span className='text-green-400'>✔</span> Basic templates</p>
                        <p><span className='text-green-400'>✔</span> Community support</p>
                        <p><span className='text-green-400'>✔</span> 1 project per month</p>
                        <br />
                        <br />
                    </div>

                    <button className='btn btn-primary rounded-full w-full'>Get Started Free</button>

                </div>

                <div className='relative parent1 shadow-2xl p-6 bg-purple-500 rounded-xl '>
                    <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 badge rounded-full border-none bg-orange-100 text-orange-600 z-10'>Most Popular</div>
                    <div>
                        <h2 className='text-xl text-white font-bold'>Pro</h2>
                        <p className='text-sm text-white'>Best for professionals</p>
                    </div>
                    <div className='py-6'>
                        <p><span className='text-2xl text-white font-bold'>$29</span>/month</p>
                    </div>
                    <div className='text-white mb-6'>
                        <p> <span className='text-green-400'>✔</span>Access to all premium tools</p>
                        <p><span className='text-green-400'>✔</span> Unlimited templates</p>
                        <p><span className='text-green-400'>✔</span> Priority support</p>
                        <p><span className='text-green-400'>✔</span> Unlimited projects</p>
                        <p><span className='text-green-400'>✔</span> Cloud sync</p>
                        <p><span className='text-green-400'>✔</span> Advanced analytics</p>

                    </div>

                    <button className='btn btn-primary rounded-full w-full'>Start Free Trial</button>

                </div>

                <div className='parent1 shadow-2xl p-6 rounded-xl bg-gray-100'>
                    <div>
                        <h2 className='text-xl font-bold'>Enterprise</h2>
                        <p className='text-sm text-gray-500'>For teams and businesses</p>
                    </div>
                    <div className='py-6'>
                        <p><span className='text-2xl font-bold'>$99</span>/month</p>
                    </div>
                    <div className='text-gray-500 mb-6'>
                        <p> <span className='text-green-400'>✔</span>Everything in Pro</p>
                        <p><span className='text-green-400'>✔</span> Team collaboration</p>
                        <p><span className='text-green-400'>✔</span> Custom integrations</p>
                        <p><span className='text-green-400'>✔</span> Dedicated support</p>
                        <p><span className='text-green-400'>✔</span> SLA guarantee</p>
                        <p><span className='text-green-400'>✔</span> Custom branding</p>
                    </div>

                    <button className='btn btn-primary rounded-full w-full'>Contact Sales</button>

                </div>

            </div>


        </div>
    );
};

export default Pricing;