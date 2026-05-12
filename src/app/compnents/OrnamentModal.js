'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function OrnamentModal({ ornament: initialOrnament, onClose }) {
  const barcodeRef = useRef(null);
  const router = useRouter();
  const [ornament, setOrnament] = useState(initialOrnament);
  const [barcodeInput, setBarcodeInput] = useState('');
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState(null);

  // Sync when parent passes new ornament
  useEffect(() => {
    setOrnament(initialOrnament);
  }, [initialOrnament]);

  // Render scannable barcode
  useEffect(() => {
    if (!ornament?.barcode || !barcodeRef.current) return;
    barcodeRef.current.innerHTML = '';
    try {
      const JsBarcode = require('jsbarcode');
      JsBarcode(barcodeRef.current, ornament.barcode, {
        format: 'CODE128',
        width: 2,
        height: 60,
        displayValue: true,
        fontSize: 14,
      });
    } catch (err) {
      // Fallback: show barcode as text if JsBarcode fails
      barcodeRef.current.textContent = ornament.barcode;
    }
  }, [ornament?.barcode]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const handleEnquire = () => {
    const params = new URLSearchParams({
      product: ornament.name,
      image: ornament.image,
      price: ornament.price,
      weight: ornament.weight,
      barcode: ornament.barcode,
    });
    router.push(`/contact?${params.toString()}`);
    onClose();
  };

  const handleBarcodeLookup = async () => {
    const code = barcodeInput.trim();
    if (!code) return;
    setLookupLoading(true);
    setLookupError(null);
    try {
      const res = await fetch(`/api/hallmark/${encodeURIComponent(code)}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Ornament not found');
      }
      const data = await res.json();
      setOrnament(data);
      setBarcodeInput('');
    } catch (err) {
      setLookupError(err.message || 'Failed to fetch details');
    } finally {
      setLookupLoading(false);
    }
  };

  if (!ornament) return null;

  return (
    <div
      className="ornament-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ornament-modal-title"
    >
      <div className="ornament-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="ornament-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="ornament-modal-content">
          <div className="ornament-modal-image">
            <Image
              src={ornament.image}
              alt={ornament.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="ornament-modal-details">
            <h2 id="ornament-modal-title" className="ornament-modal-title">
              {ornament.name}
            </h2>
            <dl className="ornament-detail-list">
              <div className="ornament-detail-row">
                <dt>Price</dt>
                <dd>{ornament.price}</dd>
              </div>
              <div className="ornament-detail-row">
                <dt>Weight</dt>
                <dd>{ornament.weight}</dd>
              </div>
              <div className="ornament-detail-row">
                <dt>Barcode</dt>
                <dd className="ornament-barcode-wrap">
                  <div ref={barcodeRef} className="ornament-barcode-svg" />
                </dd>
              </div>
            </dl>
            <div className="ornament-barcode-lookup">
              <label htmlFor="barcode-lookup">Lookup by barcode (scan or type)</label>
              <div className="ornament-barcode-lookup-row">
                <input
                  id="barcode-lookup"
                  type="text"
                  value={barcodeInput}
                  onChange={(e) => {
                    setBarcodeInput(e.target.value);
                    setLookupError(null);
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleBarcodeLookup()}
                  placeholder="Enter barcode"
                  disabled={lookupLoading}
                />
                <button
                  type="button"
                  onClick={handleBarcodeLookup}
                  disabled={lookupLoading || !barcodeInput.trim()}
                  className="ornament-barcode-lookup-btn"
                >
                  {lookupLoading ? '...' : 'Lookup'}
                </button>
              </div>
              {lookupError && (
                <span className="ornament-barcode-lookup-error">{lookupError}</span>
              )}
            </div>
            <button
              className="ornament-modal-enquire"
              onClick={handleEnquire}
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
