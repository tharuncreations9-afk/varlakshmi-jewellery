import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET - List all products
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const product_type = searchParams.get('type');
    const limit = Math.min(parseInt(searchParams.get('limit') || '100', 10), 500);

    let sql = 'SELECT product_id, product_name, product_type, price, product_img, created_on FROM products WHERE 1=1';
    const params = [];

    if (product_type != null && product_type !== '') {
      sql += ' AND product_type = ?';
      params.push(product_type);
    }
    sql += ' ORDER BY created_on DESC LIMIT ?';
    params.push(limit);

    const rows = await query(sql, params);
    return NextResponse.json(rows);
  } catch (err) {
    console.error('Products API error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
