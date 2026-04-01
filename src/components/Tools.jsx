import React, { use, useState } from 'react';
import Products from '../components/Products';
import Cart from './Cart';


const Tools = ({ toolsPromise }) => {

    const items = use(toolsPromise);

    const [AiTools, setAiTools] = useState('AiTools');
    const [cartItems, setCartItems] = useState([]);

    return (
        <div>
            <div className='text-center mt-20 space-y-3'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p className='text-gray-600'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='text-center my-10'>
                <button onClick={() => setAiTools('AiTools')} className={`btn  rounded-full rounded-r-none ${AiTools === 'AiTools' ? 'btn-primary' : 'btn-active'}`}>Products</button>
                <button onClick={() => setAiTools('Cart')} className={`btn  rounded-full rounded-l-none ${AiTools === 'Cart' ? 'btn-primary' : 'btn-active'}`}>Cart(0)</button>
            </div>




            {AiTools === 'AiTools' ? (<Products items={items} cartItems={cartItems} setCartItems={setCartItems} />) : (<Cart cartItems={cartItems} />)}
        </div>
    );



};

export default Tools;