import React, { useState } from 'react'
import { Button, Form, InputRegular, JustifyBetweenRow, Column, InputCheckbox } from '@/components'
import { IUserLoginCredentials } from '@/models'

interface Props {}
const SigninComponent: React.FC<Props> = () => {
  const [credentials, setCredentials] = useState<IUserLoginCredentials>()

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value } as IUserLoginCredentials)
  }

  return (
    <Form onSubmit={handleSignIn}>
      <Column>
        <InputRegular onChange={handleInputChange} name="username" placeholder="Username" type="text" />
        <InputRegular onChange={handleInputChange} name="password" placeholder="Password" type="password" />
      </Column>
      <JustifyBetweenRow>
        <InputCheckbox />
        <Button>Sign In</Button>
      </JustifyBetweenRow>
    </Form>
  )
}

export default SigninComponent
