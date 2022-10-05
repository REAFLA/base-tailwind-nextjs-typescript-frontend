import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

/**
 * * 미들웨어 설정 값
 * @param matcher : 미들웨어가 적용될 주소
 */
export const config = {
  matcher: ['/', '/account/:path*', '/manage/:path*', '/book/:path*'],
}

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  const USER_PATH = ['/book']
  const GUEST_PATH = ['/account/signin', '/account/signup']
  const COOKIE = request.cookies.get('accessToken')

  for (let index = 0; index < USER_PATH.length; index++) {
    // 로그인 하지 않은 경우
    if (COOKIE === undefined) {
      if (request.url.includes(USER_PATH[index])) {
        // if (request.nextUrl.pathname.startsWith('/about')) {
        //   // This logic is only applied to /about
        // }
        return NextResponse.rewrite(new URL('/account/signin', request.url))
      }
    } else {
      // 로그인 한 경우
      for (let index2 = 0; index2 < GUEST_PATH.length; index2++) {
        if (request.url.includes(GUEST_PATH[index2])) {
          return NextResponse.rewrite(new URL('/', request.url))
        }
      }
    }
  }

  return NextResponse.next()
}
