'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ContactPage() {
    const searchParams = useSearchParams();
    const product = searchParams.get('product');
    const image = searchParams.get('image');
    const price = searchParams.get('price') || '';
    const weight = searchParams.get('weight') || '';
    const barcode = searchParams.get('barcode') || '';
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);

    useEffect(() => {
        if (product || price || weight || barcode) {
            const msg = `Enquiry for: ${product || 'item'}${price ? `, Price: ${price}` : ''}${weight ? `, Weight: ${weight}` : ''}${barcode ? `, Barcode: ${barcode}` : ''}`;
            setFormData(prev => ({ ...prev, message: msg }));
        }
    }, [product, price, weight, barcode]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email) {
            alert('Please fill in all required fields.');
            return;
        }
        setSubmitLoading(true);
        try {
            const messageText = formData.message || (
                product || price || weight || barcode
                    ? `Enquiry for: ${product || 'item'}${price ? `, Price: ${price}` : ''}${weight ? `, Weight: ${weight}` : ''}${barcode ? `, Barcode: ${barcode}` : ''}`
                    : ''
            );
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contact_name: formData.name,
                    email: formData.email,
                    mobile_number: formData.phone,
                    message: messageText,
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(data.error || 'Failed to submit enquiry');
            }
            setShowModal(true);
        } catch (err) {
            alert(err.message || 'Failed to submit. Please try again.');
        } finally {
            setSubmitLoading(false);
        }
    };

    const handleWhatsApp = () => {
        const details = [product, price, weight, barcode].filter(Boolean).join(', ');
        const message = `Hello, I am interested in ${product || 'this jewellery'}${details ? ` (${details})` : ''}.\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`; // Replace with actual number
        window.open(whatsappUrl, '_blank');
        setShowModal(false);
        // Reset form
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    const handleEmail = () => {
        const subject = `Jewellery Enquiry - ${product || 'General'}`;
        const body = `Product: ${product || 'General Enquiry'}\nImage: ${image || ''}\nPrice: ${price || '-'}\nWeight: ${weight || '-'}\nBarcode: ${barcode || '-'}\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        const mailtoUrl = `mailto:info@varlakshmijewellery.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
        setShowModal(false);
        // Reset form
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <>
            {/* BANNER */}
            <section className="video-banner">
                <Navbar />

                {/* IMAGE */}
                <video
                    className="hero-video"
                    src="/hero2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* TEXT / CONTENT */}
                <div className="video-overlay">
                    <h1>Contact Us</h1>
                    <p className="della-text">
                        Get in touch to discuss your heirloom pieces
                    </p>
                </div>
            </section>

            {/* Product Preview */}
            {(product || image) && (
                <section className="contact-enquiry-preview">
                    <div className="container">
                        <div className="contact-enquiry-preview-inner">
                            {image && (
                                <img
                                    src={image}
                                    alt={product || 'Ornament'}
                                    className="contact-enquiry-image"
                                />
                            )}
                            <div className="contact-enquiry-details">
                                <h3 className="contact-enquiry-title">
                                    Enquiry for: {product || 'Ornament'}
                                </h3>
                                {(price || weight || barcode) && (
                                    <div className="contact-enquiry-meta">
                                        {price && <span>Price: {price}</span>}
                                        {weight && <span>Weight: {weight}</span>}
                                        {barcode && <span>Barcode: {barcode}</span>}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CONTACT SECTION */}
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-info">
                                <span className="section-label">Reach Out</span>
                                <h2 className="section-title">Get In Touch</h2>
                                <p className="della-text">
                                    We're here to help you find the perfect piece for your legacy.
                                </p>
                               <div className="della-text">
                                    <p><strong>Address:</strong> 8-2-120/86/9/A/23 BNR Colony,Road no:2,
                                    Banjarahills,opp.parkhyatt,Hyderabad,500034</p>
                                    <p><strong>Phone 1:</strong> +91 90300 59009, +91 99999 80090</p>
                                     <p><strong>Email:</strong> info@varlakshmijewellery.com</p>
                                    <p><strong>Hours:</strong> Mon-Sat 10am-7pm</p>            
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Your Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            rows="5"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <button
                                            type="submit"
                                            disabled={submitLoading}
                                            style={{
                                                backgroundColor: 'var(--gold)',
                                                color: 'white',
                                                border: 'none',
                                                padding: '12px 24px',
                                                borderRadius: '8px',
                                                fontFamily: 'Inter',
                                                cursor: submitLoading ? 'not-allowed' : 'pointer',
                                                opacity: submitLoading ? 0.8 : 1
                                            }}
                                        >
                                            {submitLoading ? 'Sending...' : 'Send Enquiry'}
                                        </button>
                                        {product && (
                                            <button
                                                type="button"
                                                onClick={() => router.push('/collection')}
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    color: 'var(--gray)',
                                                    border: '1px solid var(--gray)',
                                                    padding: '12px 24px',
                                                    borderRadius: '8px',
                                                    fontFamily: 'Inter',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                ← Back to Collection
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />

            {/* Send Method Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'var(--ivory)',
                        padding: '30px',
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        textAlign: 'center',
                        maxWidth: '400px',
                        width: '90%'
                    }}>
                        <h3 style={{ fontFamily: 'Playfair Display', color: 'var(--gray)', marginBottom: '20px' }}>
                            How would you like to send this enquiry?
                        </h3>
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                            <button
                                onClick={handleWhatsApp}
                                style={{
                                    backgroundColor: '#25D366',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    fontFamily: 'Inter',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                            >
                                WhatsApp
                            </button>
                            <button
                                onClick={handleEmail}
                                style={{
                                    backgroundColor: 'var(--gold)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    fontFamily: 'Inter',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                            >
                                Email
                            </button>
                        </div>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                marginTop: '20px',
                                background: 'none',
                                border: 'none',
                                color: 'var(--gray)',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}