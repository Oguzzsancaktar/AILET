import { useAuth } from '@/hooks/useAuth'
import React from 'react'

const ProfilePage = () => {
  const { loggedUser } = useAuth()
  console.log(loggedUser.user)
  return <div></div>
}

export default ProfilePage
