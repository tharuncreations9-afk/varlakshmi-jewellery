import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET - List enums (optionally filtered by enum_type_id)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const enum_type_id = searchParams.get('type');
    const status = searchParams.get('status');

    let sql = 'SELECT enum_id, enum_name, enum_type_id, status, created_on FROM enums WHERE 1=1';
    const params = [];

    if (enum_type_id != null && enum_type_id !== '') {
      sql += ' AND enum_type_id = ?';
      params.push(enum_type_id);
    }
    if (status != null && status !== '') {
      sql += ' AND status = ?';
      params.push(status);
    }
    sql += ' ORDER BY enum_type_id, enum_name';

    const rows = await query(sql, params);
    return NextResponse.json(rows);
  } catch (err) {
    console.error('Enums API error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to fetch enums' },
      { status: 500 }
    );
  }
}
