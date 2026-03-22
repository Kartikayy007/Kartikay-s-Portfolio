import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, name, rating, content } = await request.json();
    
    if (!title || !name || !rating || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO reviews (title, name, rating, content)
      VALUES (${title}, ${name}, ${rating}, ${content})
      RETURNING *;
    `;

    return NextResponse.json({ success: true, review: result.rows[0] });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
