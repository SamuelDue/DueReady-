import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // List of paths that should be blocked (not ready for production)
  const blockedPaths = [
    '/dashboard',
    '/dashboard-demo',
    '/data-room',
    '/due-diligence',
    '/auth',
    '/demo',
    '/documents',
    '/admin',
    '/test-dashboard',
    '/simple-signin',
    '/auth-redirect',
    '/onboarding',
    '/browse',
    '/create-bounty',
    '/bounties',
    '/contributor',
    '/opportunity',
    '/sign-up',
    '/sign-in',
    '/studio'
  ]

  // Check if the request path starts with any blocked path
  const isBlocked = blockedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Also block API routes related to dashboard functionality
  const isBlockedAPI = request.nextUrl.pathname.startsWith('/api/') && 
    (request.nextUrl.pathname.includes('auth') || 
     request.nextUrl.pathname.includes('dashboard') ||
     request.nextUrl.pathname.includes('documents') ||
     request.nextUrl.pathname.includes('bounties') ||
     request.nextUrl.pathname.includes('contributions') ||
     request.nextUrl.pathname.includes('users'))

  if (isBlocked || isBlockedAPI) {
    // Return 404 for blocked routes
    return new NextResponse(null, { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  // Apply middleware to all routes except static files
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
} 