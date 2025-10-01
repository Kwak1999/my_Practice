import React from 'react';

const Nav = () => {
    return (
        <nav>
            <h1 className='bg-neutral-700 w-full py-1'>hi</h1>
            <div className='columns-2xl px-4'>
                <ul className='flex gap-6'>
                    <li className='hover:underline cursor-pointer '>Home</li>
                    <li className='hover:underline cursor-pointer '>About</li>
                    <li className='hover:underline cursor-pointer '>Services</li>
                    <li className='hover:underline cursor-pointer '>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;