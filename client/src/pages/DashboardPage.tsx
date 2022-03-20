import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardPage: React.FC = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    !user && navigate('/login')
  }, [user])
  return <div>DashboardPage</div>
}

export default DashboardPage
