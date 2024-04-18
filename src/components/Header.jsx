import React from 'react'
import {Link} from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(isMenuOpen && !event.target.closest('.overlay'))
        setIsMenuOpen(isMenuOpen);
      }
    

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="sticky top-0 shadow-md bg-white w-full h-[86px] p-6 md:p-7 z-10">
    <div className=' flex justify-between items-center md:hidden'>
    <div className="max-w-24 flex items-center">
      <FaBars size="20" className='text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer'
       onClick={toggleMenu}/>
      </div>
      <div className='max-w-32 flex items-center'>
      <h1 className="text-center flex-grow">
            <Link to="/" className="font-bold font-mono text-4xl text-red-700">VINDI</Link>
          </h1>
            </div>
            
    <div className="max-w-28 flex items-center gap-x-4">
    <FaSearch size="20" className='text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer' />
      <FaUser size="20" className='text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer'/>
      <FaShoppingBag size="20"  className='text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer'/>
    </div>
    </div>
    {isMenuOpen && (
        <div className="fixed top-[86px] inset-x-0 bottom-0 z-20 flex  justify-start overlay">
        <div className="w-3/4 bg-white rounded-md shadow-lg md:hidden">
          
            <div className="flex justify-start">
              <FaTimes size="25" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
               onClick={toggleMenu} />
            </div>
            <ul>
              <li>
                <a href="/Style" 
                className="block rounded-lg m-5 p-3 text-xl text-gray-700 hover:text-gray-900 transition-colors duration-300 bg-gray-200">
                  Pick Your Style</a>
              </li>
            
            </ul>
          </div>
        </div>
      )}
    <div className="hidden md:flex w-full h-full  justify-between items-center">
      <div className="flex items-center">
        <h1 className="mr-4 font-bold font-mono text-4xl tracking-wide text-red-700" >
            <Link to="/">VINDI</Link></h1>
        <ul className="flex space-x-4">
            <li className="font-light hover:font-bold hover:border hover:border-red-700 hover:rounded-full hover:border-dotted transition duration-300 inline-block px-3 py-1"><Link to="/style">Pick Your Style</Link></li>
        </ul>
      </div>
      <div className='flex space-x-4'>
      <FaSearch size="20" className='text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer' />
      <FaUser size="20" className='text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer'/>
      <FaShoppingBag size="20"  className='text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer'/>
      </div>
    </div>
  </div>
       

      

)
}
  

export default Header;
