import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="modern-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="footer-brand">
                            <div className="footer-logo-name">
                                <img
                                    src="/logo.png"
                                    alt="Varlakshmi Jewellery"
                                    className="footer-logo"
                                />
                                <div className="footer-company-stack">
                                    <span className="luxury-brand footer-brand-line">
                                        VARLAKSHMI
                                    </span>
                                    <span className="luxury-brand footer-brand-line">
                                        JEWELLERY
                                    </span>
                                </div>
                            </div>
                            <p className="footer-tagline">
                                A LEGACY OF TRUST & BEAUTY
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="footer-links">
                            <Link href="/" className="footer-link">Home</Link>
                            <Link href="/about" className="footer-link">About</Link>                           
                            <Link href="/collection" className="footer-link">Collection</Link>
                            <Link href="/gallery" className="footer-link">Gallery</Link>
                            <Link href="/contact" className="footer-link">Contact</Link>
                        </div>
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Varlakshmi Jewellery
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}