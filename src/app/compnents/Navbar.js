'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="luxury-navbar navbar-over-video">
            <div className="container d-flex justify-content-between align-items-center">

                {/* LOGO + NAME */}
                <div className="d-flex align-items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Varlakshmi Jewellery"
                        style={{ height: "57px" }}
                    />

                    <div className="d-flex flex-column">
                        <span className="luxury-brand">
                            VARLAKSHMI 
                        </span>
                        <span className="luxury-brand">
                             JEWELLERY
                        </span>
                        <span style={{ fontSize: "11px", letterSpacing: "1px", color: "#baa173", opacity: 0.9 }}>
                            A LEGACY OF TRUST & BEAUTY
                        </span>
                    </div>
                </div>

                {/* HAMBURGER MENU */}
                <button
                    type="button"
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav-links"
                >
                    <span className={menuOpen ? 'bar open' : 'bar'}></span>
                    <span className={menuOpen ? 'bar open' : 'bar'}></span>
                    <span className={menuOpen ? 'bar open' : 'bar'}></span>
                </button>

                {/* NAV LINKS */}
                <div id="mobile-nav-links" className={`luxury-nav-links d-flex ${menuOpen ? 'mobile-menu-open' : ''}`}>
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/collection" onClick={() => setMenuOpen(false)}>Collection</Link>
                    <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>

            </div>
        </nav>
    );
}