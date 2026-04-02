import React from 'react';
import SelectedCart from './SelectedCart';

const Cart = ({ cartItems, setCartItems }) => {
    console.log(cartItems);

    const deleteCartItems = (item) => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.title !== item.title);
        setCartItems(updatedCartItems);
    }
    return (
        <div>
            {
                cartItems.length === 0 ? 
                <div className='border border-amber-50 shadow-xl h-112.5 w-5xl mx-auto rounded-xl text-center gap-4 mt-10 flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-gray-600 text-2xl'>No Products selected yet</h1>
                    <p className='text-gray-400 text-sm'>Go to products tab to choose your product</p>
                    </div>
                     : cartItems.map((item) => {

                    return (
                        <SelectedCart item={item} deleteCartItems={deleteCartItems} key={item.id} />
                    )
                        



                    


                })

            }
        </div>
    );
};

export default Cart;