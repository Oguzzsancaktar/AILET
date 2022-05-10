import { selectAccessToken, selectUserId, logout as handleLogout } from '@/store/auth/authSlice'
import useAccessStore from '@/hooks/useAccessStore'
import { useEffect, useMemo } from 'react'
import { useGetUserByIdQuery } from '@/services/userService'
import { useLoginMutation } from '@/services/authService'

export const useAuth = () => {
  const { useAppDispatch, useAppSelector } = useAccessStore()
  const dispatch = useAppDispatch()

  const accessToken = useAppSelector(selectAccessToken)
  const userId = useAppSelector(selectUserId)

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('userId', userId)
  }, [accessToken, userId])

  const {
    data: userData,
    isLoading: isLoadingLoggedUser,
    error,
    isError
  } = useGetUserByIdQuery(userId ?? '', {
    skip: !userId
  })

  const [login, { isError: isLoginRejected, isSuccess: isLoginSuccessfull }] = useLoginMutation()

  useEffect(() => {
    if (isLoginSuccessfull) {
      window.location.href = '/'
    }
  }, [isLoginSuccessfull])

  const logout = () => {
    localStorage.clear()
    dispatch(handleLogout())
    window.location.href = '/'
  }

  return {
    loggedUser: useMemo(
      () => ({
        accessToken,
        user: userData,
        isLoading: isLoadingLoggedUser,
        error,
        isError
      }),
      [accessToken, userData, isLoadingLoggedUser, isError, error]
    ),
    tryLogin: { login, isLoginRejected, isLoginSuccessfull },
    logout
  }
}
