'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/app/constants/Constant';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-md px-6 py-4">
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
        <nav className="hidden lg:flex items-center gap-10 mr-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-[#8f0000] hover:text-[#f93624] border-b-2 border-transparent transition font-semibold text-[1.1rem] hover:border-[#f93624] pb-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-main-dark"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 bg-[#8f0000] right-0 h-full w-[75%] sm:w-[60%] text-white z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden flex flex-col px-6 py-8 items-center`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button inside drawer */}
        <button onClick={closeMenu} className="self-end mb-8" aria-label="Close Menu">
          <X size={28} />
        </button>

        {/* Nav links */}
        <nav className="flex flex-col gap-6 text-lg" role="menu">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeMenu}
              className="pb-2"
              tabIndex={0}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-lg z-30 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
