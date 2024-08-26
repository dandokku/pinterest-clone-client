import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-7 w-full h-max flex justify-between items-center">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center mr-4 gap-3">
          <img src="/images/pinlogo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-red text-2xl">Pintereste</h1>
        </div>
        
        <div className="hidden md:flex gap-4">
          <Link to="/" className="hover:text-red">Watch</Link>
          <Link to="/" className="hover:text-red">Explore</Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="hover:text-red">About</Link>
        <Link to="/" className="hover:text-red">Business</Link>
        <Link to="/" className="hover:text-red">Blog</Link>
        <Link to="/" className="py-2 px-3 bg-red text-white rounded-md hover:bg-red2">Log in</Link>
        <Link to="/" className="py-2 px-3 bg-lightgray rounded-md hover:bg-gray animate-pulse">Sign up</Link>
      </div>

      {/* Menu Icon for Small Screens */}
      <div className="relative md:hidden">
        <TiThMenu 
          className="block text-3xl cursor-pointer" 
          onClick={toggleMenu} 
        />

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 h-screen bg-white shadow-md rounded-md p-4 z-10 text-center">
            <Link to="/" className="block px-4 py-2 hover:text-red">Watch</Link>
            <Link to="/" className="block px-4 py-2 hover:text-red">Explore</Link>
            <Link to="/" className="block px-4 py-2 hover:text-red">About</Link>
            <Link to="/" className="block px-4 py-2 hover:text-red">Business</Link>
            <Link to="/" className="block px-4 py-2 hover:text-red">Blog</Link>
            <Link to="/" className="block px-4 py-2 border border-red rounded-md coolRed mb-3">Log in</Link>
            <Link to="/" className="block px-4 py-2 bg-lightgray rounded-md coolgray">Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
