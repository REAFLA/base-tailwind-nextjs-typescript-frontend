import { UserProps } from 'interface/UserInterface'
import create from 'zustand'

interface InitialProps {
  user: UserProps
  setUser: (state: any) => void
  isSignin: boolean
  setIsSignin: (state: any) => void
  isAccess: number
  setIsAccess: (state: any) => void
  isUserMenuVisible: boolean
  setIsUserMenuVisible: (state: any) => void
}

const useGlobalStore = create<InitialProps>((set: any) => ({
  user: null,
  setUser: (user: UserProps) =>
    set((state: { user: UserProps }) => ({ user: user })),
  isSignin: false,
  setIsSignin: (status: boolean = false) =>
    set((state: { isSignin: boolean }) => ({ isSignin: status })),
  isAccess: 0,
  setIsAccess: (status: number = 0) =>
    set((state: { isAccess: number }) => ({ isAccess: status })),
  isUserMenuVisible: false,
  setIsUserMenuVisible: (status: boolean = false) =>
    set((state: { isUserMenuVisible: boolean }) => ({
      isUserMenuVisible: status,
    })),
}))

export default useGlobalStore
