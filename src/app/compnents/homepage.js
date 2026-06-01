'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

export default function HomePage() {
    return (
        <>
            {/* NAVBAR */}
            <section className="video-banner">

                <Navbar />


                {/* VIDEO */}
                <video
                    className="hero-video"
                    src="/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* TEXT / LOGO */}
                <div className="video-overlay">
                    {/* LOGO + COMPANY NAME */}
                    {/* <div className="d-flex align-items-center gap-3 mb-4">
                        <img
                            src="/logo.png"
                            alt="Varlakshmi Jewellery"
                            style={{ height: "60px" }}
                        />
                        <span className="luxury-brand" style={{ fontSize: "32px", color: "var(--ivory)" }}>
                            Varlakshmi Jewellery
                        </span>
                    </div> */}
                    
                    <h1>Crafted for Legacy</h1>
                 <p className="della-text">
                        Jewellery conceived as heirlooms —
                        shaped by heritage and restraint.
                    </p>
                </div>

            </section>


            {/* PHILOSOPHY SECTION - MODERN LUXURY DESIGN */}
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
                                <p className="della-text">

                            At Varalakshmi Jewellery, we create timeless jewellery that blends tradition,
                            craftsmanship, and elegance. Every piece is thoughtfully designed to celebrate 
                            life's special moments and become a cherished part of your family's legacy.
                              </p>
                              <p className="della-text">
                                With a commitment to quality, authenticity, and trust,
                                we bring you jewellery that shines across generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COLLECTIONS SECTION - FEATURED DESIGN */}
            <section className="collections-section featured-collections">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-label">Featured</span>
                        <h2 className="section-title">Signature Collections</h2>
                     <p className="della-text">Exquisite pieces that define our legacy
                           
                        </p>
                    </div>
                     <div className="row g-5">
                        <div className="col-md-4">
                            <div className="jewellery-card">
                                <div className="jewellery-image-wrapper">
                                    <img
                                        src="/pic3.png"
                                        alt="Heritage Gold Jewellery"
                                        className="jewellery-image"
                                        onError={(e) => {
                                            e.target.src = "https://cdn.pixabay.com/photo/2018/05/18/19/20/jewelry-3411407_1280.jpg";
                                        }}
                                    />
                                </div>
                                <div className="jewellery-info">
                                    <h5 className="jewellery-title">Emrald Maharani Collection</h5>
                                    <p className="della-text">
                                    Statement jewels crafted to celebrate heritage, elegance, and regal beauty.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="jewellery-card">
                                <div className="jewellery-image-wrapper">
                                    <img
                                        src="/pic2.png"
                                        alt="Bridal Jewellery"
                                        className="jewellery-image"
                                        onError={(e) => {
                                            e.target.src = "https://cdn.pixabay.com/photo/2017/07/24/12/43/gold-2534534_1280.jpg";
                                        }}
                                    />
                                </div>
                                <div className="jewellery-info">
                                    <h5 className="jewellery-title">Wedding Grandeur</h5>
                                    <p className="della-text">
                                    Handcrafted bridal masterpieces created for unforgettable moments and lasting memories.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="jewellery-card">
                                <div className="jewellery-image-wrapper">
                                    <img
                                        src="/pic1.png"
                                        alt="Contemporary Jewellery"
                                        className="jewellery-image"
                                        onError={(e) => {
                                            e.target.src = "https://cdn.pixabay.com/photo/2015/09/02/12/25/diamond-918416_1280.jpg";
                                        }}
                                    />
                                </div>
                                <div className="jewellery-info">
                                    <h5 className="jewellery-title">Timeless Emerald Icons</h5>
                                    <p className="della-text">
                                    Refined designs that blend modern sophistication with enduring luxury.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TOP IMAGES SECTION - BELOW COLLECTIONS */}
            {/* <section className="top-images-section">
                <div className="container">
                    <div className="top-image-wrapper">
                        <img
                            src="/pic1.jpg"
                            alt="Image 1"
                            className="top-image"
                        />
                    </div>
                    <div className="top-image-wrapper">
                        <img
                            src="/pic2.jpg"
                            alt="Image 2"
                            className="top-image"
                        />
                    </div>
                    <div className="top-image-wrapper">
                        <img
                            src="/pic3.jpg"
                            alt="Image 3"
                            className="top-image"
                        />
                    </div>
                </div>
            </section> */}

            {/* IMAGE GALLERY - HORIZONTAL SCROLL */}
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
                            <div className="gallery-item">
                                <img 
                                    src="/gallery1.jpg" 
                                    alt="Gallery Image 1"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery2.jpg" 
                                    alt="Gallery Image 2"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery3.jpg" 
                                    alt="Gallery Image 3"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery4.jpg" 
                                    alt="Gallery Image 4"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery5.jpg" 
                                    alt="Gallery Image 5"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery6.jpg" 
                                    alt="Gallery Image 6"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery7.jpg" 
                                    alt="Gallery Image 7"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery8.jpg" 
                                    alt="Gallery Image 8"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery9.jpg" 
                                    alt="Gallery Image 9"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery10.jpg" 
                                    alt="Gallery Image 10"
                                />
                            </div>
                            {/* Duplicate for seamless loop */}
                            <div className="gallery-item">
                                <img 
                                    src="/gallery1.jpg" 
                                    alt="Gallery Image 1"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery2.jpg" 
                                    alt="Gallery Image 2"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery3.jpg" 
                                    alt="Gallery Image 3"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery4.jpg" 
                                    alt="Gallery Image 4"
                                />
                            </div>
                            <div className="gallery-item">
                                <img 
                                    src="/gallery5.jpg" 
                                    alt="Gallery Image 5"
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
