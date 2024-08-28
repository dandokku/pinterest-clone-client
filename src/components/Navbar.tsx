import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TiThMenu, TiTimes } from "react-icons/ti"; // Import both menu and close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref with HTMLDivElement type

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: Event) => { // Using Event instead of MouseEvent
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="p-7 w-full h-max flex justify-between items-center relative z-50"> {/* Ensure z-index is high */}
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
      <div className="relative md:hidden" ref={menuRef}>
        {isOpen ? (
          <TiTimes className="block text-3xl cursor-pointer" onClick={toggleMenu} /> // Close icon
        ) : (
          <TiThMenu className="block text-3xl cursor-pointer" onClick={toggleMenu} /> // Menu icon
        )}

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-md rounded-md p-4 z-50 text-center">
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
