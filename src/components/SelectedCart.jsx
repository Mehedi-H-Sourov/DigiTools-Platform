import React from 'react';

const SelectedCart = ({ item }) => {
    return (
        <div>
            <div className=' flex justify-between  items-center bg-base-200 max-w-5xl mx-auto rounded-xl p-6 space-y-4 mt-10 border border-gray-100 shadow-lg'>

                <div className='flex gap-2 items-center'>
                    <div className='text-3xl bg-base-200 p-4'>
                        {item.icon}
                    </div>

                    <div>
                        <h1 className='font-bold'>{item.title}</h1>
                        <h3><span className='text-xl font-bold'>{item.price}</span>/{item.period}</h3>
                    </div>
                </div>

                <button className='btn  text-red-500'>Remove</button>
            </div>

        </div>
    );
};

export default SelectedCart;