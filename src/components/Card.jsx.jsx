import React, { useState } from 'react';

const Products = ({ items }) => {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className='grid lg:grid-cols-3 gap-2.5 max-w-5xl mx-auto mt-10'>
            <div className='shadow-lg border-gray-600 rounded-xl p-6 space-y-4'>
                <div className='flex justify-between py-6 '>
                    <div className='text-3xl'>{items.icon}</div>
                    <div className="badge badge-error p-4 rounded-full">{items.badge}</div>
                </div>
                <h1 className='text-3xl font-bold'>{items.title}</h1>
                <p className='text-gray-500'>{items.description}</p>
                <h3>{items.price}/{items.period}</h3>

                <ul>
                    {items.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="text-green-500">✔</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <button className='btn btn-primary w-full rounded-full' onClick={() => setIsSelected(true)} >
                    {isSelected ? 'Bought' : 'Buy Now 2'}
                </button>


            </div>


        </div>
    );
};

export default Products;