import React from 'react';

const Users = () => {
    return (
        <div className='flex justify-around bg-blue-600 px-8 py-8'>
            <div className='text-center'>
                <h2 className='text-6xl text-white font-bold py-3'>50K+</h2>
                <p className='text-white'>Active Users</p>
            </div>

            <div className='text-center'>
                <h2 className='text-6xl text-white font-bold py-3'>200K+</h2>
                <p className='text-white'>Premium Tools</p>
            </div>

            <div className='text-center'>
                <h2 className='text-6xl text-white font-bold py-3'>4.9</h2>
                <p className='text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Users;