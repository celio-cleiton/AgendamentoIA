import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const securePaths = ['/dashboard', '/schedule']
  const path = request.nextUrl.pathname
  const token = request.cookies.get('next-auth.session-token')

  // Redirecionar para login se não autenticado
  if (securePaths.some(p => path.startsWith(p)) && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // Headers de segurança
  const response = NextResponse.next()
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  }

  return response
}