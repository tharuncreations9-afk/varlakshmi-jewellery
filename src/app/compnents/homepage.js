'use client';

import Navbar from './Navbar';
import Footer from './Footer';

export default function HomePage() {
    return (
        <>
            <section className="video-banner">
                <Navbar />

                <video
                    className="hero-video"
                    src="/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div className="video-overlay">
                    <p className="hero-brand-line">VLJ Treasures</p>
                    <h1>Crafted for Legacy</h1>
                    <p>
                        The retail collection of Varlakshmi Jewellery —
                        shaped by heritage and restraint.
                    </p>
                </div>
            </section>

            {/* SECTION 1 — OUR PHILOSOPHY */}
            <section className="philosophy-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="philosophy-image-wrapper">
                                <img
                                    src="/ourphilosophy.jpg"
                                    alt="Our Philosophy - Jewellery"
                                    className="philosophy-image"
                                    onError={(e) => {
                                        e.target.src = "https://cdn.pixabay.com/photo/2018/05/18/19/20/jewelry-3411407_1280.jpg";
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="philosophy-content">
                                <span className="section-label">Our Story</span>
                                <h2 className="section-title">Our Philosophy</h2>
                                <p className="philosophy-text">
                                    At VLJ Treasures, we create timeless jewellery that blends tradition, craftsmanship, and elegance. Every piece is thoughtfully designed to celebrate life&apos;s special moments and become a cherished part of your family&apos;s legacy.
                                </p>
                                <p className="philosophy-text">
                                    With a commitment to quality, authenticity, and trust, we bring you jewellery that shines across generations — crafted by Varlakshmi Jewellery, brought to you through VLJ Treasures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOUSE IDENTITY — COMPANY vs RETAIL BRAND */}
            <section className="house-section">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-label">Our House</span>
                        <h2 className="section-title">One Craft. Two Ways We Serve.</h2>
                        <p className="section-subtitle">
                            VLJ Treasures A brand of Varlakshmi Jewellery.
                        </p>
                    </div>

                    <div className="house-grid">
                        <div className="house-column">
                            <span className="house-role">Manufacturing &amp; Wholesale</span>
                            <h3 className="house-name">Varlakshmi Jewellery</h3>
                            <p className="house-copy">
                                Premium jewellery manufacturing since 2016 — precision craft, uncut and fine diamond artistry, trusted by the trade.
                            </p>
                        </div>
                        <div className="house-divider" aria-hidden="true" />
                        <div className="house-column">
                            <span className="house-role">Retail</span>
                            <h3 className="house-name">VLJ Treasures</h3>
                            <p className="house-copy">
                                Our retail brand for you — heirloom pieces designed to celebrate life&apos;s special moments with elegance and grace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — SIGNATURE COLLECTIONS */}
            <section className="collections-section featured-collections">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-label">Featured</span>
                        <h2 className="section-title">Signature Collections</h2>
                        <p className="section-subtitle">
                            Exquisite pieces from VLJ Treasures
                        </p>
                    </div>
                     <div className="row g-5">
                        <div className="col-md-4">
                            <div className="jewellery-card">
                                <div className="jewellery-image-wrapper">
                                    <img
                                        src="/emerald-maharani.png"
                                        alt="Emerald Maharani Collection"
                                        className="jewellery-image"
                                    />
                                </div>
                                <div className="jewellery-info">
                                    <h5 className="jewellery-title">Emerald Maharani Collection</h5>
                                    <p className="jewellery-description">
                                        Statement jewels crafted to celebrate heritage, elegance, and regal beauty.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="jewellery-card">
                                <div className="jewellery-image-wrapper">
                                    <img
                                        src="/wedding-grandeur.png"
                                        alt="Wedding Grandeur"
                                        className="jewellery-image"
                                    />
                                </div>
                                <div className="jewellery-info">
                                    <h5 className="jewellery-title">Wedding Grandeur</h5>
                                    <p className="jewellery-description">
                                        Handcrafted bridal masterpieces created for unforgettable moments and lasting memories.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="jewellery-card">
                                <div className="jewellery-image-wrapper">
                                    <img
                                        src="/timeless-emerald.png"
                                        alt="Timeless Emerald Icons"
                                        className="jewellery-image"
                                    />
                                </div>
                                <div className="jewellery-info">
                                    <h5 className="jewellery-title">Timeless Emerald Icons</h5>
                                    <p className="jewellery-description">
                                        Refined designs that blend modern sophistication with enduring luxury.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image-gallery-section">
                <div className="container mb-5">
                    <div className="section-header text-center">
                        <span className="section-label">Browse</span>
                        <h2 className="section-title">Our Collections</h2>
                        <p className="della-text">
                            Explore our complete range of timeless jewellery
                        </p>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <div className="gallery-scroll-wrapper">
                        <div className="gallery-scroll">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5].map((n, i) => (
                                <div className="gallery-item" key={`${n}-${i}`}>
                                    <img
                                        src={`/gallery${n}.jpg`}
                                        alt={`Gallery Image ${n}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
