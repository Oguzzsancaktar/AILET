import { SigninComponent, SignupComponent } from '@/components'
import { Button } from 'antd'
import React, { useState } from 'react'

const LoginPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false)

  const handleClick = () => {
    setIsSignup(!isSignup)
  }

  return (
    <div>
      {isSignup ? <SignupComponent /> : <SigninComponent />}
      <Button onClick={() => handleClick()}>{isSignup ? 'Signup' : 'Signin'}</Button>
    </div>
  )
}

export default LoginPage
