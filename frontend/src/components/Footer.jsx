import { assets } from '../assets/assets'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex felx-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text sm'>
                <div>
                    <img className='mb-5 w-32' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus impedit debitis facere vitae magni! Rem quaerat incidunt saepe id earum, consequatur ipsum, nisi, magnam tempore natus commodi aliquid vero? Minima!</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-234-9785</li>
                        <li>support@swishhstore.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text:sm text-center'>Copyright 2025@ Swishh - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer