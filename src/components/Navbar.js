import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='font-mono border-b-4 border-blue-600 text-center fixed top-0 bg-blue-600 font-bold w-full text-lg text-white'>
        <ul>
            <li className='inline-block py-4 '>
               <Link to='/' className='pl-6 pr-8 hover:text-blue-200'>Home</Link>
            </li>
            <li className='inline-block py-4'>
               <Link to='/about' className='pl-6 pr-8  hover:text-blue-200'>About</Link>
            </li>
            <li className='inline-block py-4'>
               <Link to='/articles-list' className='pl-6 pr-8  hover:text-blue-200'>Articles</Link>
            </li>
            
        </ul>

    </div>
  )
}

export default Navbar