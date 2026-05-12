'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import galleryImages from '../data/galleryImages';

export default function Gallery() {
    return (
        <>
            <section className="video-banner">
                <Navbar />
                <video className="hero-video" src="/hero4.mp4" autoPlay muted loop />
                <div className="video-overlay">
                    <h1>Gallery</h1>
                    <p>Our timeless jewellery moments</p>
                </div>
            </section>

            <section className="lux-gallery-wrapper">
                <div className="lux-gallery-grid">
                    {galleryImages.map((item, index) => (
                        <div className="gallery-card" key={index}>
                            <Image
                                src={item.src}
                                alt={item.exhibition}
                                fill
                                className="gallery-image"
                            />

                            {/* IIJS SYMBOL */}
                            {item.badge && (
                                <img
                                    src={item.badge}
                                    alt="IIJS Logo"
                                    className="expo-badge"
                                />
                            )}
                        </div>
                    ))}

                </div>
            </section>

            <Footer />
        </>
    );
}
