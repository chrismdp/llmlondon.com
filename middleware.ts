import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add caching headers to all pages (10 minutes cache)
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // API routes handle their own caching
    return response;
  }
  
  // Add caching headers for all pages
  response.headers.set('Cache-Control', 'public, max-age=600, stale-while-revalidate=600');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};