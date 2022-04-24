import React, { useCallback, useEffect } from 'react'
import App from '@/App'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from '@/apis/axios.instance'
import { AxiosRequestConfig } from 'axios'
import { useAuth } from '@/hooks/useAuth'
const AppRouter = () => {
  const {
    loggedUser: { accessToken }
  } = useAuth()

  const fetchPreAppRunData = useCallback(async () => {
    try {
      axios.interceptors.request.use((config: AxiosRequestConfig) => {
        if (config.headers) {
          config.headers.Authorization = 'Bearer ' + accessToken
        }
        return config
      })
    } catch (error) {
      console.log(error)
    } finally {
    }
  }, [accessToken])

  useEffect(() => {
    fetchPreAppRunData()
  }, [accessToken, fetchPreAppRunData])

  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppRouter
