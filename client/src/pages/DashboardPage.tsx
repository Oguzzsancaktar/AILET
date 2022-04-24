import { useAuth } from '@/hooks/useAuth'
import React from 'react'

const DashboardPage: React.FC = () => {
  const { loggedUser, logout } = useAuth()
  const handleLogout = () => {
    logout()
  }
  return (
    <div>
      {loggedUser.user?.email}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DashboardPage
