import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET - Single product by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const [row] = await query(
      'SELECT product_id, product_name, product_type, price, product_img, created_on FROM products WHERE product_id = ?',
      [id]
    );
    if (!row) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(row);
  } catch (err) {
    console.error('Product API error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
