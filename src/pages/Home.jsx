import React, { useEffect, useRef } from 'react';


const Home = () => {
  
  const videoRef = useRef(null);

  useEffect(() => {
    
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className='relative'>
      <div className="bg-cover bg-center h-96 flex justify-center items-center relative">
        <div className='text-center'>
          <h1 className='text-white font-mono text-4xl '>Industrial design meets fashion</h1>
          <button className='text-white text-bold text-lg bg-red-700 p-2 m-4 rounded-xl  hover:bg-red-300'>Shop Now</button>
        </div>
      </div>

      <div className=" p-10 mt-10">
        <h1 className=' text-3xl p-3 m-12'>Trending This Week</h1>
        
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
          
          
        </div>
      </div>
      <div className="p-10">
        <video ref={videoRef} autoPlay loop muted className="w-full" style={{ height: '400px', objectFit: 'cover' }} controls={false}>
          <source src="/vv1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" p-10 mt-10">
        <h1 className=' text-3xl p-3 m-12'>More Inspiration</h1>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
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
          
        </div>
    </div>
    <div className=" p-10 mt-10">
        <h1 className=' text-3xl p-3 m-12'>Latest & Greatest</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
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
    </div>
  );
};

export default Home;
