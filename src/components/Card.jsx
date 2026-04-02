import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Products = ({ item, cartItems, setCartItems }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleCartItems = () => {
        toast.success(`${item.title} added to cart!`);
        setIsSelected(true);
        setCartItems([...cartItems, item]);
    };

    return (
        <div >
            <div className='shadow-lg border-gray-600 rounded-xl p-6 space-y-4'>

                <div className='flex justify-between py-6 '>
                    <div className='text-3xl'>{item.icon}</div>
                    <div className="badge badge-error p-4 rounded-full">{item.badge}</div>
                </div>
                <h1 className='text-3xl font-bold'>{item.title}</h1>
                <p className='text-gray-500'>{item.description}</p>
                <h3><span className='text-xl font-bold'>{item.price}</span>/{item.period}</h3>

                <ul>
                    {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="text-green-500">✔</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <button className='btn w-full rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white' onClick={handleCartItems} disabled={isSelected} >
                    {isSelected ? 'Bought' : 'Buy Now'}
                </button>


            </div>


        </div>
    );
};

export default Products;