'use client';

import Link from 'next/link';
import { Menu, X, Facebook, Twitter, Globe, Mail, Phone, Users, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      
      {/* 1. TOP BAR */}
      <div className="bg-slate-900 text-gray-400 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={14} /></a>
            <a href="#" className="hover:text-white transition-colors"><Globe size={14} /></a>
          </div>

          <div className="hidden md:flex space-x-6">
            {/* NEW ORDER: Awards First */}
            <Link href="/awards" className="hover:text-yellow-400 flex items-center gap-1 transition-colors text-yellow-500 font-bold">
                <Trophy size={12}/> Our Awards
            </Link>
            <Link href="/about" className="hover:text-white flex items-center gap-1 transition-colors">
                <Users size={12}/> About Us
            </Link>
            <Link href="/contact" className="hover:text-white flex items-center gap-1 transition-colors">
                <Phone size={12}/> Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className="bg-slate-950 text-white shadow-xl border-b border-slate-800 relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link href="/">
                <img src="/logo.png" alt="Trimaax Tech Logo" className="h-12 w-auto object-contain" />
              </Link>
            </div>

            <nav className="hidden xl:flex space-x-1">
              <NavLink href="/" text="Home" />
              <NavLink href="/services" text="Services" />
              <NavLink href="/facilities" text="Facilities" />
              <NavLink href="/products" text="Products" />
              <NavLink href="/projects" text="Projects" />
              <NavLink href="/organisation" text="Organisation" />
              <NavLink href="/clients" text="Clients" />
            </nav>

            <div className="xl:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-slate-900 text-white border-t border-slate-800 absolute w-full z-50">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
             <Link href="/awards" className="block px-4 py-3 rounded-lg bg-yellow-500/10 text-yellow-500 font-bold">Our Awards</Link>
             <Link href="/about" className="block px-4 py-3 rounded-lg hover:bg-slate-800">About Us</Link>
             <Link href="/clients" className="block px-4 py-3 rounded-lg hover:bg-slate-800">Clients</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, text, highlight }) {
  return (
    <Link 
      href={href} 
      className={`px-3 py-2 text-xs font-bold rounded transition duration-200 uppercase tracking-wide
        ${highlight ? 'text-yellow-500 hover:bg-yellow-500/10' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
    >
      {text}
    </Link>
  );
}