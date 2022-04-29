import { IAuthState } from '@/models'
import React, { createContext, useState } from 'react'
import * as Keychain from 'react-native-keychain'

type IProvider = {
  authstate: IAuthState
  setAuthState: (authstate: IAuthState) => void
  getAccessToken: () => string | null
  logout: () => void
}

const AuthContext = createContext(null)
const { Provider }: any = AuthContext

interface IProps {
  children?: React.ReactNode
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>({
    accessToken: null,
    refreshToken: null,
    authenticated: null
  })

  const logout = async () => {
    await Keychain.resetGenericPassword()
    setAuthState({
      accessToken: null,
      refreshToken: null,
      authenticated: false
    })
  }

  const getAccessToken = () => {
    return authState.accessToken
  }

  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
        logout
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
