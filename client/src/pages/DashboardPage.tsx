import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage: React.FC = () => {
  const { loggedUser, logout } = useAuth()
  const handleLogout = () => {
    logout()
  }
  return (
    <div>
      {loggedUser.user?.email}
      <Link to="/profile">Profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default DashboardPage
