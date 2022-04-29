import React, { useCallback, useContext, useEffect, useState } from 'react'
import Login from './src/components/Login'
import { AuthContext } from './src/context/AuthContext'
import * as Keychain from 'react-native-keychain'
import Dashboard from './src/components/Dashboard'
import Spinner from './src/components/Spinner'

const App = () => {
  const authContext: any = useContext(AuthContext)
  const [status, setStatus] = useState('loading')

  const loadJWT = useCallback(async () => {
    try {
      const value: any = await Keychain.getGenericPassword()

      const jwt = JSON.parse(value.password)

      if (authContext) {
        authContext.setAuthState({
          accessToken: jwt.accessToken || null,
          refreshToken: jwt.refreshToken || null,
          authenticated: jwt.accessToken !== null
        })
      }

      setStatus('success')
    } catch (error: any) {
      setStatus('error')
      console.log(`Keychain Error: ${error.message}`)
      authContext.setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false
      })
    }
  }, [])

  useEffect(() => {
    loadJWT()
  }, [loadJWT])

  if (status === 'loading') {
    return <Spinner />
  }

  if (authContext?.authState?.authenticated !== true) {
    return <Login />
  } else {
    return <Dashboard />
  }
}
export default App
