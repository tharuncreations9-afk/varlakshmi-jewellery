'use client';

import Navbar from './Navbar';
import Footer from './Footer';

export default function AboutPage() {
    return (
        <>
            <section className="video-banner">
                <Navbar />

                <video
                    className="hero-video"
                    src="/hero3.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div className="video-overlay">
                    <h1>About Us</h1>
                    <p>
                        Varlakshmi Jewellery &amp; VLJ Treasures
                    </p>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-info">
                                <span className="section-label">Our Story</span>
                                <h2 className="section-title">Crafting Legacies Since 2016</h2>
                                <p className="about-text">
                                    Varlakshmi Jewellery has been a distinguished name in premium jewellery manufacturing and wholesale since 2016. Our commitment to quality, artistry, and timeless design reflects a legacy of trust, precision, and unmatched craftsmanship. We specialize in manufacturing exquisite uncut diamond and fine diamond jewellery, blending traditional techniques with contemporary elegance.
                                </p>
                                <p className="about-text">
                                    VLJ Treasures is the retail brand of Varlakshmi Jewellery — bringing the same craftsmanship directly to you. Each piece is a symbol of enduring luxury, meticulously crafted and beautifully detailed, designed to elevate every moment with sophistication and grace.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image-wrapper">
                                <img
                                    src="/ourphilosophy.jpg"
                                    alt="About Varlakshmi Jewellery"
                                    className="about-image"
                                    onError={(e) => {
                                        e.target.src = "https://cdn.pixabay.com/photo/2017/07/24/12/43/gold-2534534_1280.jpg";
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="house-grid about-house-grid">
                        <div className="house-column">
                            <span className="house-role">Manufacturing &amp; Wholesale</span>
                            <h3 className="house-name">Varlakshmi Jewellery</h3>
                            <p className="house-copy">
                                The parent house — precision manufacturing and wholesale for the jewellery trade.
                            </p>
                        </div>
                        <div className="house-divider" aria-hidden="true" />
                        <div className="house-column">
                            <span className="house-role">Retail</span>
                            <h3 className="house-name">VLJ Treasures</h3>
                            <p className="house-copy">
                                Our retail brand — curated collections for life&apos;s most cherished moments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
