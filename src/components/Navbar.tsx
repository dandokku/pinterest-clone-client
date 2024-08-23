import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-5 w-full h-max flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-3">
          <img src="/images/pinlogo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-red text-2xl">Pintereste</h1>
        </div>
        
        <div className="hidden md:flex gap-4">
          <Link to="/">Watch</Link>
          <Link to="/">Explore</Link>
        </div>
      </div>

      <div className="hidden md:flex gap-4">
        <Link to="/">About</Link>
        <Link to="/">Business</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Log in</Link>
        <Link to="/">Sign up</Link>
      </div>

      {/* Menu Icon for Small Screens */}
      <div className="relative md:hidden">
        <TiThMenu 
          className="block text-3xl cursor-pointer" 
          onClick={toggleMenu} 
        />

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-10">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Watch</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Explore</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">About</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Business</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Log in</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Sign up</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
