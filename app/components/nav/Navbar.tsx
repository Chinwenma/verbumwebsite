'use client';

import { navLinks } from '@/app/constants/Constant';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 text-primary shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/logo.webp"
            alt="logo"
            width={150}
            height={40}
            className="h-[50px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 mr-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary-dark border-b-2 border-transparent hover:text-primary hover:border-primary transition font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-primary-dark"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-primary-dark text-white z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 lg:hidden flex flex-col px-6 py-8`}
      >
        {/* Close button inside drawer */}
        <button onClick={closeMenu} className="self-end mb-8">
          <X size={28} />
        </button>

        {/* Nav links */}
        <nav className="flex flex-col gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="hover:text-primary-light border-b border-white/20 pb-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
