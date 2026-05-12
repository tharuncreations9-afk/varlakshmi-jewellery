import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET - List all employees
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50', 10), 200);

    const rows = await query(
      'SELECT employee_id, employee_name, gender, image, role, email, mobile_number, created_on FROM employees ORDER BY employee_id LIMIT ?',
      [limit]
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error('Employees API error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to fetch employees' },
      { status: 500 }
    );
  }
}
