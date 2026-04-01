import React from 'react';
import Card from './Card.jsx';

const Products = ({ items, cartItems, setCartItems }) => {
    console.log(items);
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-2.5 mt-10 max-w-5xl mx-auto'>

                {
                    items.map((item) => {

                        return <Card key={item.id} item={item} cartItems={cartItems} setCartItems={setCartItems} />;
                    })
                }

            </div>
        </div>
    );
};

export default Products;