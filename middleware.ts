import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const MAINTENANCE_MODE = false;

export function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE) {
    if (request.nextUrl.pathname !== '/maintenance') {
      return NextResponse.redirect(new URL('/maintenance', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.svg|images).*)',
  ],
};
