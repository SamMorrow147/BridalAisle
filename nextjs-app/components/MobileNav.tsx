'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Menu portal content
  const menuContent = (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="mobile-menu-header">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/White-BA-logo-stacked.png"
              alt="Bridal Aisle"
              width={80}
              height={100}
              style={{ width: 'auto', height: '80px', maxWidth: '100%' }}
            />
          </Link>
        </div>
        
        <nav className="mobile-menu-links">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/appointments" onClick={closeMenu}>Appointments</Link>
          <Link href="/bridal" onClick={closeMenu}>Bridal</Link>
          <Link href="/mens-suits" onClick={closeMenu}>Men&apos;s Suits</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <div className="mobile-menu-footer">
          <a href="tel:(763) 220-2319" className="mobile-phone">
            (763) 220-2319
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Nav Bar */}
      <nav className="mobile-nav-bar">
        <Link href="/" className="mobile-logo" onClick={closeMenu}>
          <Image
            src="/BA-logo-stacked.png"
            alt="Bridal Aisle"
            width={50}
            height={62}
            priority
            style={{ width: 'auto', height: '45px' }}
          />
        </Link>
        
        <button 
          className="hamburger-menu" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* Render menu at document.body level using portal */}
      {mounted && createPortal(menuContent, document.body)}
    </>
  );
}

