/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  crossOrigin: 'anonymous',
  images: {
    domains: ['swiperjs.com', 'localhost'],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `http://172.28.112.1:8001/:path*`,
  //       permanent: true,
  //     },
  //     {
  //       source: '/redirects/api/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_ENV_API_URL}/:path*`,
  //       permanent: true,
  //     },
  //   ]
  // },
  async rewrites() {
    return [
      {
        source: '/book',
        destination: `/book/all`,
      },
      {
        source: '/book/update',
        destination: `/book/all`,
      },
      // {
      //   source: '/api/:path*',
      //   destination: `http://43.200.190.224:8001/:path*`,
      // },
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_ENV_API_URL}/:path*`,
      },
    ]
  },
}
