// src/app/api/articles/route.ts

import { NextResponse } from 'next/server';
import { fetchAllArticles } from '../../../../firestore'; // Adjust the path as needed

export async function GET() {
  try {
    const articles = await fetchAllArticles();
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
// New configuration syntax
export const dynamic = 'force-dynamic';

