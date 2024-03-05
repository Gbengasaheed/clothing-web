import React from 'react'
import {Link} from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="sticky top-0 shadow-md bg-white p-7 z-10">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="mr-4 font-bold font-mono text-4xl tracking-wide text-red-700" >
            <Link to="/">VINDI</Link></h1>
        <ul className="flex space-x-4">
            <li className="font-light hover:font-bold hover:border hover:border-red-700 hover:rounded-full hover:border-dotted transition duration-300 inline-block px-3 py-1"><Link to="/style">Pick Your Style</Link></li>
        </ul>
      </div>
      <div className='flex space-x-4'>
      <FaSearch size="20" className='text-gray-700 hover:text-gray-300 transition-colors duration-300 cursor-pointer' />
      <FaUser size="20" className='text-gray-700 hover:text-gray-300 transition-colors duration-300 cursor-pointer'/>
      <FaShoppingBag size="20"  className='text-gray-700 hover:text-gray-300 transition-colors duration-300 cursor-pointer'/>
      </div>
    </div>
  </nav>
       

      

)
}
  

export default Header
