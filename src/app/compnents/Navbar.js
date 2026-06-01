'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`luxury-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3 brand-wrap">
          <img
            src="/logo.png"
            alt="Varlakshmi Jewellery"
            className="brand-logo"
          />

          <div className="d-flex flex-column brand-text-wrap">
            <span className="luxury-brand">VARLAKSHMI</span>
            <span className="luxury-brand">JEWELLERY</span>
            <span className="brand-tagline">
              A LEGACY OF TRUST & BEAUTY
            </span>
          </div>
        </div>

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>

        <div
          className={`luxury-nav-links d-flex ${
            menuOpen ? 'mobile-menu-open' : ''
          }`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/collection" onClick={() => setMenuOpen(false)}>
            Collection
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}