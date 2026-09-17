import Link from 'next/link';

function InstagramIcon() {
    return (
        <svg
            className="footer-social-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
            />
        </svg>
    );
}

function WhatsAppIcon() {
    return (
        <svg
            className="footer-social-icon footer-whatsapp-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <path
                fill="currentColor"
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.68 7.53c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.76 2.67 4.25 3.73 2.05.88 2.47.71 2.91.66.44-.05 1.43-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.25-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.64-1.19-1.43-1.33-1.67-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.4-.54-.4z"
            />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="modern-footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-left">
                        <div className="footer-logo-name">
                            <img
                                src="/logo.png"
                                alt="VLJ Treasures"
                                className="footer-logo"
                            />
                            <div className="footer-company-stack">
                                <span className="luxury-brand footer-brand-line">
                                    VLJ TREASURES
                                </span>
                                <span className="footer-brand-sub">
                                    A retail brand of Varlakshmi Jewellery
                                </span>
                            </div>
                        </div>
                        <p className="footer-tagline">
                            Manufacturing &amp; wholesale by Varlakshmi Jewellery · Retail by VLJ Treasures
                        </p>
                    </div>

                    <div className="footer-right">
                        <div className="footer-links">
                            <Link href="/" className="footer-link">Home</Link>
                            <Link href="/about" className="footer-link">About</Link>
                            <Link href="/collection" className="footer-link">Collection</Link>
                            <Link href="/contact" className="footer-link">Contact</Link>
                        </div>

                        <div className="footer-socials">
                            <a
                                href="https://www.instagram.com/vljtreasures/"
                                className="footer-social-link"
                                target="_blank"
                                rel="noopener noreferrer me"
                                title="VLJ Treasures on Instagram"
                                aria-label="Follow VLJ Treasures on Instagram"
                            >
                                <InstagramIcon />
                                <span className="footer-social-label">
                                    <strong>VLJ Treasures</strong>
                                    <small>@vljtreasures</small>
                                </span>
                            </a>
                            <a
                                href="https://www.instagram.com/varlakshmijewellery/"
                                className="footer-social-link"
                                target="_blank"
                                rel="noopener noreferrer me"
                                title="Varlakshmi Jewellery on Instagram"
                                aria-label="Follow Varlakshmi Jewellery on Instagram"
                            >
                                <InstagramIcon />
                                <span className="footer-social-label">
                                    <strong>Varlakshmi Jewellery</strong>
                                    <small>@varlakshmijewellery</small>
                                </span>
                            </a>
                            <a
                                href="https://wa.me/919030059009"
                                className="footer-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp +91 90300 59009"
                                aria-label="Chat on WhatsApp +91 90300 59009"
                            >
                                <WhatsAppIcon />
                                <span className="footer-social-label">
                                    <strong>WhatsApp</strong>
                                    <small>+91 90300 59009</small>
                                </span>
                            </a>
                            <a
                                href="https://wa.me/919999980090"
                                className="footer-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp +91 99999 80090"
                                aria-label="Chat on WhatsApp +91 99999 80090"
                            >
                                <WhatsAppIcon />
                                <span className="footer-social-label">
                                    <strong>WhatsApp</strong>
                                    <small>+91 99999 80090</small>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
