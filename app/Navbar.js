'use client';   // <--- THIS IS THE MAGIC LINE WE MISSED

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-blue-400">
            TRIMAAX TECH
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="#services" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="#about" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              <Link href="#contact" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <Link href="#contact" className="block bg-blue-600 px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}