import axios from 'axios'
import { useRouter } from 'next/router'
import { createContext, useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { UserReadAPI } from 'src/api/userAPI'
import useGlobalStore from 'src/store/useGlobalStore'

interface AuthProviderProps {
  children: any
}

export interface AuthContextValue {
  handleSignout: () => any
  handleCookieToken: ({ access_token, refresh_token }: any) => Promise<void>
}

const AuthContext = createContext<AuthContextValue>({
  handleSignout: () => Promise.resolve(),
  handleCookieToken: () => Promise.resolve(),
})

export function AuthProvider({ children }: AuthProviderProps) {
  const cookies = new Cookies()
  const router = useRouter()
  const { isSignin, user, setUser, setIsSignin, setIsAccess } = useGlobalStore()

  const initialize = async () => {
    const accessToken = cookies.get('accessToken')

    if (accessToken) {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${accessToken}`,
      }

      const response: any = await UserReadAPI()

      switch (response.status) {
        case 'success':
          setIsSignin(true)
          setUser(response.message.user)
          setIsAccess(response.message.user.is_access)
          console.log(user)
          break
        case 'expire':
          await handleSignout()
          break
        default:
          await handleSignout()
      }
    }
  }

  const handleCookieToken = async ({
    access_token,
    refresh_token,
  }: any): Promise<any> => {
    const expires = new Date()
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24)

    // * httpOnly 프로덕트에서 수정해야됨!
    cookies.set('accessToken', access_token, {
      path: '/',
      expires,
      httpOnly: process.env.NODE_ENV == 'development' ? false : false,
    })
    cookies.set('refreshToken', refresh_token, {
      path: '/',
      expires,
      httpOnly: process.env.NODE_ENV == 'development' ? false : false,
    })
  }

  const handleCookiePrevURL = () => {
    if (!router.asPath.startsWith('/book/update')) {
      globalThis.localStorage.setItem('prevURL', router.asPath)
    }
  }

  const handleSignout = () => {
    let domain

    switch (process.env.NODE_ENV) {
      case 'development':
        domain = 'localhost'
        break
      case 'production':
        domain = process.env.NEXT_PUBLIC_ENV_API_URL.replaceAll('http://', '')
          .replaceAll('https://', '')
          .replaceAll(':8001', '')
          .replaceAll(':3000', '')
        break
      default:
        domain = 'localhost'
        break
    }

    localStorage.clear()
    cookies.remove('accessToken', { path: '/', domain: domain })
    cookies.remove('refreshToken', { path: '/', domain: domain })
    setUser(null)
    setIsSignin(false)
    setIsAccess(0)
    router.push('/').catch(console.error)
  }

  useEffect(() => {
    initialize()
    handleCookiePrevURL()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider
      value={{
        handleSignout,
        handleCookieToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
