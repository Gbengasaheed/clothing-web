import React from 'react'
import { FaFilter } from 'react-icons/fa';

const Style = () => {
  return (
    <div className=' flex flex-col'>
      <div className='flex justify-start item-center my-10 mx-5'>
      <h1 className='text-3xl tracking-wide'>Designers</h1>
      </div>
      
      <div className='flex justify-start gap-4 item-center my-12 mx-5 hover:underline decoratrion-1'>
      <FaFilter size={25} className='flex flex-col justify-start text-gray-700 hover:text-gray-900 cursor-pointer '/>
      <h1 className='text-xl'>Filter and sort</h1>
      </div>
      
      
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          
          <div className="bg-white  shadow-md rounded-lg hover:shadow-3xl hover cursor-pointer relative">
              <img src="/v21.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h2 className="text-xl font-bold">Vindi Top</h2>
                <p className="text-gray-600">&pound;35.99</p>
              </div>
  
            </div>
            
            <div className="bg-white  shadow-md rounded-lg hover:shadow-3xl cursor-pointer relative">
              <img src="/v20.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h2 className="text-xl font-bold">Vindi Top</h2>
                <p className="text-gray-600">&pound;35.99</p>
              </div>
            </div>
            <div className="bg-white  shadow-md rounded-lg hover:shadow-3xl cursor-pointer relative">
              <img src="/v17.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h2 className="text-xl font-bold">Vindi Top</h2>
                <p className="text-gray-600">&pound;35.99</p>
              </div>
            </div>
            <div className="bg-white  shadow-md rounded-lg hover:shadow-3xl cursor-pointer relative">
            <img src="/v5.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h2 className="text-xl font-bold">Vindi Top</h2>
              <p className="text-gray-600">&pound;35.99</p>
            </div>
          </div>
          <div className="bg-white  shadow-md rounded-lg hover:shadow-3xl cursor-pointer relative">
            <img src="/v11.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h2 className="text-xl font-bold">Vindi Top</h2>
              <p className="text-gray-600">&pound;35.99</p>
            </div>
          </div>
          <div className="bg-white  shadow-md rounded-lg hover:shadow-3xl cursor-pointer relative">
            <img src="/v7.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h2 className="text-xl font-bold">Vindi Top</h2>
              <p className="text-gray-600">&pound;35.99</p>
            </div>
          </div>
          <div className="bg-white  shadow-md rounded-lg relative hover:shadow-3xl cursor-pointer">
            <img src="/v4.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h2 className="text-xl font-bold">Vindi Top</h2>
              <p className="text-gray-600">&pound;35.99</p>
            </div>
          </div>
        <div className="bg-white  shadow-md rounded-lg  hover:shadow-3xl relative cursor-pointer">
            <img src="/v8.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h2 className="text-xl font-bold">Vindi Top</h2>
              <p className="text-gray-600">&pound;35.99</p>
            </div>
          </div>
          <div className="bg-white  shadow-md rounded-lg hover:shadow-3xl relative cursor-pointer">
            <img src="/v15.jpg" alt="Image 1" className="w-full h-full object-cover rounded-md" />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <h2 className="text-xl font-bold">Vindi Top</h2>
              <p className="text-gray-600">&pound;35.99</p>
            </div>
          </div>
          </div>
        </div>
    
  )
}

export default Style
