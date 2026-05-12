'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AboutPage() {
    return (
        <>
            {/* NAVBAR */}
            <section className="video-banner">

                <Navbar />

                {/* IMAGE */}
                <video
                    className="hero-video"
                    src="/hero3.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* TEXT / LOGO */}
                <div className="video-overlay">
                    <h1>About Us</h1>
                    <p>
                        Discover the story behind Varlakshmi Jewellery
                    </p>
                </div>

            </section>

            {/* ABOUT SECTION */}
            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-info">
                                <span className="section-label">Our Story</span>
                                <h2 className="section-title">Crafting Legacies Since 1980</h2>
                                <p className="about-text">
                                    Varlakshmi Jewellery has been a beacon of excellence in the world of fine jewellery for over four decades. Founded with a vision to blend traditional craftsmanship with modern design, we have become synonymous with quality, trust, and timeless beauty.
                                </p>
                                <p className="about-text">
                                    Our master artisans combine age-old techniques with contemporary aesthetics to create pieces that tell stories of heritage and love. Each creation is a testament to our commitment to perfection and our passion for the art of jewellery making.
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
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </>
    );
}