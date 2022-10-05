import { useContext } from 'react'
import AuthContext from 'src/contexts/jwtContext'

export const useAuth = () => useContext(AuthContext) as any
