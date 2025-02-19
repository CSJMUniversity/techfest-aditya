import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Maha Kumbh 2025
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Events</a></li>
          <li><a href="#" className="hover:underline">Gallery</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 py-4">
          <ul className="text-center space-y-4 text-lg">
            <li><a href="#" className="block hover:underline">Home</a></li>
            <li><a href="#" className="block hover:underline">About</a></li>
            <li><a href="#" className="block hover:underline">Events</a></li>
            <li><a href="#" className="block hover:underline">Gallery</a></li>
            <li><a href="#" className="block hover:underline">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;