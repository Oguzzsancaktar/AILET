import { RouteProps } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'

export const PrivateRoute = ({ children }: RouteProps) => {
  const {
    loggedUser: { accessToken, user, isLoading, isError }
  } = useAuth()

  useEffect(() => {
    if (!accessToken || !user) window.location.href = '/login'
  }, [accessToken, user])

  return <>{children}</>
}
