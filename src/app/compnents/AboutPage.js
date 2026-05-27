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
                                <p className="della-text">
  Varlakshmi Jewellery has been a distinguished name in premium jewellery manufacturing since 2016.
  Our commitment to quality, artistry, and timeless design reflects a legacy of trust, precision,
  and unmatched craftsmanship. Varlakshmi Jewellery specializes in manufacturing exquisite uncut
  diamond and fine diamond jewellery, blending traditional techniques with contemporary elegance.
</p>

<p className="della-text">
  Each piece is a symbol of enduring luxury, meticulously crafted and beautifully detailed,
  designed to elevate every moment with sophistication and grace.
</p>
                   
<link
  href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap"
  rel="stylesheet"
/>         </div>
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
 
