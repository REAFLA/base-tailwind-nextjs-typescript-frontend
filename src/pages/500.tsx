import Link from 'next/link'
import { ReactElement } from 'react'

interface InitialProps {
  data?: any
}

export default function Custom500Page({
  data,
}: InitialProps): ReactElement | null {
  return (
    <>
      <section className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              500
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Internal Server Error
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              우리는 이미 문제를 해결하기 위해 노력하고 있습니다
            </p>
            <Link href={'/'} passHref>
              <a
                href="#"
                className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
              >
                되돌아가기
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
