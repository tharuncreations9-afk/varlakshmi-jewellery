import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// POST - Submit new contact enquiry
export async function POST(request) {
  try {
    const body = await request.json();
    const { contact_name, email, mobile_number, adress, message } = body;

    if (!contact_name || !email || !mobile_number) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    const mobileNum =
      typeof mobile_number === 'string'
        ? parseInt(mobile_number.replace(/\D/g, ''), 10) || 0
        : mobile_number;

    const sql = `INSERT INTO contact_enq (contact_name, email, mobile_number, adress, message, created_on)
      VALUES (?, ?, ?, ?, ?, NOW())`;

    await query(sql, [contact_name, email, mobileNum, adress || null, message || null]);

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully',
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
}

// GET - List contact enquiries (admin use)
export async function GET() {
  try {
    const rows = await query(
      'SELECT contact_id, contact_name, email, mobile_number, adress, message, created_on FROM contact_enq ORDER BY created_on DESC LIMIT 100'
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error('Contact API GET error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to fetch enquiries' },
      { status: 500 }
    );
  }
}
