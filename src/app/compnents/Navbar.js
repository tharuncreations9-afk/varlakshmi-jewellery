'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const WHATSAPP_APPOINTMENT_URL =
    'https://wa.me/919999980090?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20VLJ%20Treasures.';

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
            <div className="container navbar-inner">

                <Link href="/" className="navbar-brand-block" onClick={() => setMenuOpen(false)}>
                    <img
                        src="/logo.png"
                        alt="VLJ Treasures"
                        className="navbar-logo"
                    />
                    <div className="navbar-brand-text">
                        <span className="luxury-brand">VLJ TREASURES</span>
                        <span className="navbar-tagline">
                            A brand of Varlakshmi Jewellery
                        </span>
                    </div>
                </Link>

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

                <div className={`navbar-right ${menuOpen ? 'mobile-menu-open' : ''}`}>
                    <div id="mobile-nav-links" className="luxury-nav-links">
                        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="/collection" onClick={() => setMenuOpen(false)}>Collection</Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>

                    <a
                        href={WHATSAPP_APPOINTMENT_URL}
                        className="navbar-appointment-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Book an Appointment
                    </a>
                </div>

            </div>
        </nav>
    );
}
