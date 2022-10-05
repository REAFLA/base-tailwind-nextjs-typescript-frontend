import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { useAuth } from 'src/hooks/useAuth'
import useGlobalStore from 'src/store/useGlobalStore'

interface InitialProps {
  data?: any
}

export default function HeaderComponent({
  data,
}: InitialProps): ReactElement | null {
  const auth = useAuth()
  const router = useRouter()
  const { isSignin, isAccess, isUserMenuVisible, setIsUserMenuVisible } =
    useGlobalStore()
  const navigations = [
    { id: 1, label: '동화책 보기', path: '/book/all', isSignin: true },
  ]

  return (
    <>
      {router.pathname !== '/error' &&
        router.pathname !== '/404' &&
        router.pathname !== '/500' && (
        <header>
          헤더
          </header>
        )}
    </>
  )
}
