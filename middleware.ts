import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const MAINTENANCE_MODE = false;

export function middleware(request: NextRequest) {
  // Maintenance mode check
  if (MAINTENANCE_MODE) {
    if (request.nextUrl.pathname !== '/maintenance') {
      return NextResponse.redirect(new URL('/maintenance', request.url));
    }
  }

  // Canonical URL enforcement (www + https)
  const host = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || 'https';
  
  // Redirect to www.cemrebridal.com with https
  if (host === 'cemrebridal.com' || protocol === 'http') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = 'www.cemrebridal.com';
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.svg|images).*)',
  ],
};
