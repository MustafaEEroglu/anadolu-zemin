import { NextResponse } from 'next/server';

const PLACE_ID = process.env.GOOGLE_PLACES_ID;
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

if (!PLACE_ID || !API_KEY) {
  throw new Error('Missing required environment variables');
}

export const dynamic = 'force-dynamic'; // Disable static optimization

// Store in memory to avoid multiple API calls
let cachedReviews: any = null;
let lastFetch: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Günlük istek sayısını takip etmek için
let dailyRequestCount = 0;
let lastRequestDate = new Date().toDateString();

export async function GET() {
  try {
    const now = Date.now();
    const today = new Date().toDateString();
      // Gün değiştiyse sayacı sıfırla
    if (today !== lastRequestDate) {
      console.log(`Yeni gün başladı: ${today}. Sayaç sıfırlanıyor...`);
      dailyRequestCount = 0;
      lastRequestDate = today;
    }

    // API kullanım durumunu logla
    console.log(`
    🔍 API Kullanım Durumu:
    - Bugünkü Tarih: ${today}
    - Bugünkü İstek Sayısı: ${dailyRequestCount}
    - Son İstek Tarihi: ${new Date(lastFetch).toLocaleString('tr-TR')}
    - Cache Durumu: ${cachedReviews ? 'Dolu' : 'Boş'}
    `);

    // Günlük limit kontrolü (ekstra güvenlik)
    if (dailyRequestCount >= 1) {
      console.warn(`⚠️ Günlük API limiti aşıldı (${dailyRequestCount}/1). Cache kullanılıyor...`);
      return NextResponse.json({ reviews: cachedReviews || [] });
    }
    
    // Return cached data if it exists and is less than 24 hours old
    if (cachedReviews && (now - lastFetch < CACHE_DURATION)) {
      return NextResponse.json({ reviews: cachedReviews });
    }

    // Fetch new data from Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}&language=tr`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }    // Update cache and increment counter
    cachedReviews = data.result.reviews || [];
    lastFetch = now;
    dailyRequestCount++;

    console.log(`
    ✅ Google Places API çağrısı başarılı:
    - Alınan Yorum Sayısı: ${cachedReviews.length}
    - Yeni İstek Sayısı: ${dailyRequestCount}/1
    `);

    return NextResponse.json({ reviews: cachedReviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    // If there's an error but we have cached data, return it
    if (cachedReviews) {
      return NextResponse.json({ reviews: cachedReviews });
    }
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
