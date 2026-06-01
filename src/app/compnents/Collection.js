'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import OrnamentModal from './OrnamentModal';
import { getOrnamentByIndex } from '../data/ornaments';

export default function Collection() {
  const baseImages = Array.from({ length: 10 }, (_, i) => `/gallery${i + 1}.jpg`);
  const images = Array.from({ length: 100 }, (_, i) => baseImages[i % 10]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedOrnament, setSelectedOrnament] = useState(null);



  const filteredImages =
    category === 'all'
      ? images
      : images.filter((img) => img.toLowerCase().includes(category));


  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  // const handleOrnamentClick = (index) => {
  //   setSelectedOrnament(getOrnamentByIndex(startIndex + index));
  // };
 return (
    <>
      {/* HERO SECTION */}
      <section className="video-banner">
        <Navbar />

        <video
          className="hero-video"
          src="/hero4.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="video-overlay">
          <h1>Our Collection</h1>
          <p className="della-text">Explore crafted jewellery pieces that define our legacy </p>
        </div>
      </section>

      {/* COLLECTION SECTION */}
      <section className="collection-container">

        {/* SEARCH – RIGHT SIDE */}
        <div className="search-container">
          <div className="search-right">
            <div className="search-container">
              <div className="search-right">

                <select
                  className="items-select"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="all">All Jewellery</option>
                  <option value="necklace">Necklace</option>
                  <option value="bangle">Bangle</option>
                  <option value="ring">Ring</option>
                  <option value="earring">Earrings</option>
                  <option value="bracelet">Bracelet</option>
                  <option value="pendant">Pendant</option>
                </select>

              </div>-
            </div>

            <button onClick={() => setCurrentPage(1)}>
              Search
            </button>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="collection-grid">
          {currentImages.map((src, index) => {
            const ornament = getOrnamentByIndex(startIndex + index);
            return (
              <div
                key={startIndex + index}
                className="collection-card"
                // onClick={() => handleOrnamentClick(index)}
                // onKeyDown={(e) => e.key === 'Enter' && handleOrnamentClick(index)}
                // role="button"
                // tabIndex={0}
                // aria-label={`View ${ornament.name}`}
              >
                <Image
                  src={src}
                  alt={ornament.name}
                  width={400}
                  height={300}
                  className="collection-image"
                />
              </div>
            );
          })}
        </div>

        {/* PAGINATION INFO */}
        <div className="pagination-controls">
          <div className="items-per-page">
            <span className="items-label">Show</span>
            <div className="select-wrapper">
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
                className="items-select"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={100}>100</option>
              </select>
            </div>
            <span className="items-label">per page</span>
          </div>

          <div className="page-info">
            <span className="page-numbers">
              {startIndex + 1}-{Math.min(endIndex, filteredImages.length)}
            </span>
            <span className="page-total">of {filteredImages.length} items</span>
          </div>
        </div>

        {/* MODERN PAGINATION */}
        {totalPages > 1 && (
          <div className="modern-pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-arrow"
            >
              ‹
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (page) =>
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                )
                .map((page, index, array) => (
                  <div key={page} className="page-group">
                    {index > 0 && array[index - 1] !== page - 1 && (
                      <span className="pagination-dots">...</span>
                    )}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`pagination-number ${currentPage === page ? 'active' : ''
                        }`}
                    >
                      {page}
                    </button>
                  </div>
                ))}
            </div>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-arrow"
            >
              ›
            </button>
          </div>
        )}
      </section>

      {selectedOrnament && (
        <OrnamentModal
          ornament={selectedOrnament}
          onClose={() => setSelectedOrnament(null)}
        />
      )}

      <Footer />
    </>
  );
}
