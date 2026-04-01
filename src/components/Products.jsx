import React from 'react';
import Card from './Card.jsx';

const Products = ({ items }) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>

                {
                    items.map((item) => {
                        return <Card key={item.id} item={item} />;
                    })
                }

            </div>
        </div>
    );
};

export default Products;