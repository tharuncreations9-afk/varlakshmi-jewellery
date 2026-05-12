// Ornament data for collection items
// Each item maps to gallery images with full ornament details

const baseImages = Array.from({ length: 10 }, (_, i) => `/gallery${i + 1}.jpg`);

// Sample ornament names by category for variety
const ornamentNames = [
  'Gold Temple Necklace',
  'Pearl Bridal Set',
  'Diamond Pendant',
  'Antique Bangle',
  'Ruby Earrings',
  'Emerald Ring',
  'Kundan Choker',
  'Meenakari Bracelet',
  'Polki Set',
  'Jadau Anklet',
];

// Generate ornament data for a given index
export function getOrnamentByIndex(index) {
  const imageIndex = index % baseImages.length;
  const nameIndex = index % ornamentNames.length;
  const basePrice = 15000 + (index % 50) * 2500;
  const weight = (2.5 + (index % 20) * 0.25).toFixed(2);
  const barcode = `VLK${String(index + 1).padStart(6, '0')}`;

  return {
    id: index + 1,
    image: baseImages[imageIndex],
    name: ornamentNames[nameIndex] + ` #${index + 1}`,
    price: `₹${basePrice.toLocaleString('en-IN')}`,
    weight: `${weight}g`,
    barcode,
  };
}

export { baseImages };
