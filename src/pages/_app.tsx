import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios'
import LayoutComponent from 'components/LayoutComponent'
import MainTopScrollButtonComponent from 'components/main/MainTopScrollButtonComponent'
import { AuthProvider } from 'contexts/jwtContext'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import { EffectCallback, useCallback, useEffect, useState } from 'react'
import { Cookies } from 'react-cookie'
import { useMediaQuery } from 'react-responsive'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useGlobalStore from 'store/useGlobalStore'
import 'styles/globals.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// https://flowbite.com/docs/components/avatar/
// https://flowbite.com/blocks/
// https://v1.chakra-ui.com/docs/components/overlay/tooltip
// https://fkhadra.github.io/react-toastify/introduction/
// https://react-icons.github.io/react-icons/search?q=arrow

axios.defaults.withCredentials = true
// axios.defaults.maxContentLength = Infinity
// axios.defaults.maxBodyLength = Infinity
// axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
// axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.timeout = 10000

function MyApp(props: any) {
  const { Component, pageProps } = props
  const cookies = new Cookies()
  const router = useRouter()
  const { setIsUserMenuVisible } = useGlobalStore()
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [isScrollTopButton, setIsScrollTopButton] = useState<boolean>(false)
  const isResponsive = useMediaQuery({ query: '(max-width: 768px)' })

  const accessToken = cookies.get('accessToken')
  if (accessToken) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${accessToken}`,
    }
  }

  // 스크롤 감지
  const handleUpdateScroll = useCallback(() => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)

    switch (true) {
      case scrollPosition > 170:
        setIsScrollTopButton(true)
        break
      default:
        setIsScrollTopButton(false)
        break
    }
  }, [scrollPosition])

  useEffect((): ReturnType<EffectCallback> => {
    globalThis.addEventListener('scroll', handleUpdateScroll)
    return () => {
      globalThis.removeEventListener('scroll', handleUpdateScroll)
    }
  }, [handleUpdateScroll, scrollPosition])
  // ========================================

  /**
   ** 페이지 이동감지
   ** store에서 데이터 값을 초기화 할때 이용
   */
  useEffect(() => {
    // console.log(router.pathname.split("/")[2] !== "notice");
    // // 고객센터 네비게이션 바 초기화
    // if (
    //   router.pathname.split("/")[2] !== "notice" &&
    //   router.pathname.split("/")[2] !== "event" &&
    //   router.pathname.split("/")[2] !== "faq" &&
    //   router.pathname.split("/")[2] !== "partnership"
    // ) {
    //   handleSearchHide();
    // }
    setIsUserMenuVisible(false)
  }, [router, setIsUserMenuVisible])
  // ========================================

  // 동적으로 "CSS" 파일 가져올때
  // useEffect(() => {
  //   switch (isResponsive) {
  //     case true:
  //       break;
  //     default:
  //       // import("styles/pc/header/HeaderComponent.css");
  //       break;
  //   }
  // }, [isResponsive]);
  // ========================================

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>도깨비에디터</title>
      </Head>
      {/* 페이지 로딩 프로그래스바 */}
      <NextNProgress color="#64748b" height={5} />
      <ChakraProvider>
        <AuthProvider>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </AuthProvider>

        {/* 스크롤 탑 버튼 */}
        {isScrollTopButton && (
          <MainTopScrollButtonComponent
            onOkClick={() =>
              (globalThis.document.documentElement.scrollTop = 0)
            }
          />
        )}
        {/* 노티 */}
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      </ChakraProvider>
    </>
  )
}

// MyApp.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
//   return { userAgent };
// };

export default MyApp
