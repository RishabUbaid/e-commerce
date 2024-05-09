import React from 'react';
import { FaPlay, FaSearch } from "react-icons/fa";
import header from "../assets/banner.jpg";

function Header() {
  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6 bg-gray-100'>
      <div className="container mx-auto py-[16vh]">
        <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
          <div className='lg:w-[32rem] w-full flex flex-col space-y-6'>
            <div className='text-4xl md:text-5xl font-bold text-gray-800 lg:text-6xl'>
              Elevate <span className='text-[#FDC55E]'>Your</span> Online <span className='text-[#FDC55E]'>Shopping</span> Experience <span className='text-[#fdc55e]'>Here.</span>
            </div>
            <div className="lg:text-xl text-gray-900 md:text-lg text-base">
              Welcome to a world where your desires come to life with just a click. Elevate your shopping journey with us – where quality meets convenience, and your satisfaction is our priority.
            </div>
            <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md">
              <div className='flex items-center'>
                <FaSearch size={22} className='cursor-pointer text-gray-800'/>
                <input type="text" placeholder='Search products here...' className='text-gray-800 w-full border-none outline-none py-2 px-4' />
              </div>
              <div className='h-10 w-10 relative bg-pastel-green rounded-full'>
                <FaSearch size={15} className='cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <button className='bg-[#FDC55E] active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>
                Explore Now
              </button>
              <div className="flex gap-4 items-center">
                <div className='h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full'>
                  <FaPlay size={18} className='cursor-pointer text-pastel-green absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                </div>
                <div className='lg:text-xl text-gray-800 md:text-lg text-base cursor-pointer'>
                  Watch Now
                </div>
              </div>
            </div>
          </div>
          <img src={header} alt="" className='h-[35rem] mx-auto justify-end'/>
        </div>
      </div>
    </div>
  );
}

export default Header;
