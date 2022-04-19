import React, { useState } from 'react'
import { Button, Form, InputRegular, JustifyBetweenRow, Column, InputCheckbox } from '@/components'
import { IUserLoginCredentials } from '@/models'
import { InputWithIcon } from '../input'
import { Camera, Key, User } from 'react-feather'

interface Props {}
const SigninComponent: React.FC<Props> = () => {
  const [credentials, setCredentials] = useState<IUserLoginCredentials>()
  const [usernameError, setUsernameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value } as IUserLoginCredentials)
  }

  return (
    <Form onSubmit={handleSignIn}>
      <Column>
        <InputWithIcon
          validationError={usernameError}
          onChange={handleInputChange}
          name="username"
          placeholder="Username"
          type="text"
        >
          <User />
        </InputWithIcon>
        <InputWithIcon
          validationError={emailError}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
          type="password"
        >
          <Key />
        </InputWithIcon>
      </Column>
      <JustifyBetweenRow>
        <InputCheckbox />
        <Button>Sign In</Button>
      </JustifyBetweenRow>
    </Form>
  )
}

export default SigninComponent
