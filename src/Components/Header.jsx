
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center items-center p-4 sm:gap-6 md:gap-8 lg:gap-10 text-white text-xl font-serif  bg-gray-800 rounded-xl">
       <Link to="/"> <div className="relative text-center p-2 border-b-8 border-b-transparent hover:border-b-transparent rounded-md transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[8px] after:w-0 after:bg-blue-900 after:transition-all after:duration-500 hover:after:w-full">Home</div></Link> 
       <Link to="/about"><div className="relative text-center p-2 border-b-8 border-b-transparent hover:border-b-transparent rounded-md transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[8px] after:w-0 after:bg-blue-900 after:transition-all after:duration-500 hover:after:w-full">About us</div></Link> 
      
       <Link to="/projects"><div className="relative text-center p-2 border-b-8 border-b-transparent hover:border-b-transparent rounded-md transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[8px] after:w-0 after:bg-blue-900 after:transition-all after:duration-500 hover:after:w-full">Projects</div></Link> 
       <Link to="/contact"><div className="relative text-center p-2 border-b-8 border-b-transparent hover:border-b-transparent rounded-md transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[8px] after:w-0 after:bg-blue-900 after:transition-all after:duration-500 hover:after:w-full">Contact</div></Link> 
    </div>
  )
}

export default Header