import React, { useState } from 'react'
import { Button, Form, JustifyBetweenRow, Column, Row, FormErrorMessage } from '@/components'
import { IUserSigninCredentials } from '@/models'
import { InputWithIcon } from '../input'
import { Key, User } from 'react-feather'
import { isEmailValid, isPasswordValid } from '@/utils/validationUtils'
import { signin } from '@/services/authService'
import { useNavigate } from 'react-router-dom'
import useAccessStore from '@/hooks/useAccessStore'
import { setUser } from '@/store'
import jwtDecode from 'jwt-decode'

interface Props {}
const SigninComponent: React.FC<Props> = () => {
  const navigate = useNavigate()
  const { useAppDispatch } = useAccessStore()
  const dispatch = useAppDispatch()

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [credentials, setCredentials] = useState<IUserSigninCredentials>({
    email: 'info@oguzsancaktar.com',
    password: '123456'
  })

  const validateFormFields = (): boolean => {
    setEmailError(false)
    setPasswordError(false)
    setErrorMessage('')
    if (!isEmailValid(credentials.email)) {
      setErrorMessage('Please enter a valid email')
      setEmailError(true)
      return false
    }
    if (!isPasswordValid(credentials.password)) {
      setErrorMessage('Password must be at least 6 characters long')
      setPasswordError(true)
      return false
    }
    return true
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationResult = validateFormFields()

    try {
      if (validationResult) {
        const response = await signin(credentials)
        if (response.status === 201) {
          console.log(response.data)
          // console.log(jwt.decode(response.data.accessToken))
          const buffer = await jwtDecode(response.data.accessToken)
          console.log(buffer)
          // dispatch(setUser())
          // navigate('/')
        }
      }
    } catch (error: any) {
      setErrorMessage(error.data.errors[0])
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value } as IUserSigninCredentials)
  }

  return (
    <Form onSubmit={handleSignIn}>
      <Column>
        <InputWithIcon
          validationError={emailError}
          onChange={handleInputChange}
          onBlur={validateFormFields}
          name="email"
          placeholder="email"
          type="text"
          value={credentials.email}
        >
          <User />
        </InputWithIcon>
        <InputWithIcon
          validationError={passwordError}
          onBlur={validateFormFields}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
          type="password"
          value={credentials.password}
        >
          <Key />
        </InputWithIcon>
        <Row>
          <FormErrorMessage message={errorMessage} />
        </Row>
      </Column>
      <JustifyBetweenRow>
        {/* <InputCheckbox /> */}
        <Button>Sign In</Button>
      </JustifyBetweenRow>
    </Form>
  )
}

export default SigninComponent
