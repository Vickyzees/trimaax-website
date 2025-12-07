'use client';

import Link from 'next/link';
import { Menu, X, Facebook, Twitter, Globe, Mail, Phone, Users, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full font-sans sticky top-0 z-[100] bg-slate-950">
      
      {/* 1. TOP BAR */}
      <div className="bg-slate-900 text-gray-400 text-xs py-2 border-b border-slate-800 relative z-[101]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={14} /></a>
            <a href="#" className="hover:text-white transition-colors"><Globe size={14} /></a>
          </div>

          <div className="hidden xl:flex space-x-6">
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
      <div className="bg-slate-950 text-white shadow-2xl border-b border-slate-800 relative z-[101]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img src="/logo.png" alt="Trimaax Tech Logo" className="h-12 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex space-x-1">
              <NavLink href="/" text="Home" />
              <NavLink href="/services" text="Services" />
              <NavLink href="/facilities" text="Facilities" />
              <NavLink href="/products" text="Products" />
              <NavLink href="/awards" text="Awards" highlight />
              <NavLink href="/projects" text="Projects" />
              <NavLink href="/organisation" text="Organisation" />
              <NavLink href="/clients" text="Clients" />
            </nav>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-300 hover:text-white p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 top-[110px] bg-slate-950/95 backdrop-blur-xl z-[100] overflow-y-auto h-screen border-t border-slate-800">
          <div className="px-6 py-8 space-y-4 flex flex-col pb-32">
             
             <MobileLink href="/" text="Home" onClick={() => setIsOpen(false)} />
             
             <Link 
               href="/awards" 
               onClick={() => setIsOpen(false)}
               className="block px-6 py-4 rounded-xl bg-yellow-500/10 text-yellow-500 font-bold border border-yellow-500/20 text-lg"
             >
               🏆 Our Awards
             </Link>

             <MobileLink href="/services" text="Services" onClick={() => setIsOpen(false)} />
             <MobileLink href="/facilities" text="Facilities" onClick={() => setIsOpen(false)} />
             <MobileLink href="/products" text="Products" onClick={() => setIsOpen(false)} />
             <MobileLink href="/projects" text="Projects" onClick={() => setIsOpen(false)} />
             <MobileLink href="/organisation" text="Organisation" onClick={() => setIsOpen(false)} />
             <MobileLink href="/clients" text="Clients" onClick={() => setIsOpen(false)} />
             <MobileLink href="/about" text="About Us" onClick={() => setIsOpen(false)} />
             
             <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 rounded-xl bg-blue-600 text-white font-bold text-center mt-4 text-lg"
             >
                Contact Us
             </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// Helper for Desktop (Clean JavaScript)
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

// Helper for Mobile (Clean JavaScript)
function MobileLink({ href, text, onClick }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-6 py-4 rounded-xl hover:bg-slate-800 text-lg font-medium text-slate-200 border border-slate-800/50"
    >
      {text}
    </Link>
  );
}