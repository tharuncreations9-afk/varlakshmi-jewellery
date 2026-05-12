import { getOrnamentByIndex } from '../../../data/ornaments';
import { NextResponse } from 'next/server';

// Hallmark/barcode lookup API – returns ornament details by barcode
// Replace with your actual hallmark data source when available
export async function GET(request, { params }) {
  try {
    const { barcode } = await params;
    if (!barcode) {
      return NextResponse.json(
        { error: 'Barcode is required' },
        { status: 400 }
      );
    }

    // Parse VLKXXXXXX format to get index
    const match = barcode.match(/^VLK(\d+)$/i);
    let ornament = null;

    if (match) {
      const index = parseInt(match[1], 10) - 1;
      if (index >= 0) {
        ornament = getOrnamentByIndex(index);
        if (ornament.barcode.toUpperCase() !== barcode.toUpperCase()) {
          ornament = null;
        }
      }
    }

    if (!ornament) {
      return NextResponse.json(
        { error: 'Ornament not found for this barcode' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ...ornament,
      hallmark: {
        purity: '916',
        certification: 'BIS Hallmark',
        assayCenter: 'Hyderabad',
      },
    });
  } catch (err) {
    console.error('Hallmark API error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
