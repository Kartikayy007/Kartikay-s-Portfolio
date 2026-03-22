import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// GET route to initialize the table
export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        content TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const countResult = await sql`SELECT COUNT(*) FROM reviews`;
    if (countResult.rows[0].count === '0') {
      await sql`
        INSERT INTO reviews (title, name, rating, content)
        VALUES ('Flawless execution', 'DesignMonster', 5, 'In the app, I find a wide variety of attention to detail and animations that work smoothly. The responsiveness is unmatched and the implementation matches the original Figma designs pixel-by-pixel. Extremely satisfied...');
      `;
    }

    return NextResponse.json({ success: true, message: "Reviews table synced." });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
