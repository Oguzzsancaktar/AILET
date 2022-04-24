import React, { useState } from 'react'
import { Form, InputRegular, Button, Row } from '@/components'
import { Column } from '../layout'
import useAccessStore from '@/hooks/useAccessStore'
import { IUserCreateDTO } from '@/models'
import { FormErrorMessage } from '../form'
import { isEmailValid, isPasswordAndConfirmMatch, isPasswordValid, isUsernameValid } from '@/utils/validationUtils'
import { InputWithIcon } from '../input'
import { Key, Mail, User } from 'react-feather'

type IProps = {}

type ISignupFormValues = IUserCreateDTO & { passwordConfirm: string }

const SignupComponent: React.FC<IProps> = () => {
  const { useAppDispatch } = useAccessStore()
  const dispatch = useAppDispatch()

  const [usernameError, setUsernameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')

  const [signupFormValues, setSignupFormValues] = useState<ISignupFormValues>({
    username: 'sancaktar',
    email: 'info@oguzsancaktar.com',
    password: '12341234',
    passwordConfirm: '12341234'
  })

  const validateFormFields = (): boolean => {
    const { username, email, password, passwordConfirm } = signupFormValues
    setUsernameError(false)
    setEmailError(false)
    setPasswordError(false)
    setConfirmPasswordError(false)
    setErrorMessage('')

    if (!isUsernameValid(username)) {
      setErrorMessage('Username must be at least 6 characters long')
      setUsernameError(true)
      return false
    }
    if (!isEmailValid(email)) {
      setErrorMessage('Please enter a valid email')
      setEmailError(true)
      return false
    }

    if (!isPasswordValid(password)) {
      setErrorMessage('Password must be at least 6 characters long')
      setPasswordError(true)
      return false
    }

    if (!isPasswordAndConfirmMatch(password, passwordConfirm)) {
      setErrorMessage('Password and Confirm Password must be same')
      setPasswordError(true)
      setConfirmPasswordError(true)
      return false
    }

    return true
  }

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationResult = validateFormFields()
    try {
      if (validationResult) {
      } else {
        console.log('enter valid signupFormValues', signupFormValues)
      }
    } catch (error: any) {
      setErrorMessage(error.data.error)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormValues({ ...signupFormValues, [event.target.name]: event.target.value } as ISignupFormValues)
  }

  return (
    <Form onSubmit={handleSignUp}>
      <Column>
        <InputWithIcon
          validationError={usernameError}
          onBlur={validateFormFields}
          onChange={handleInputChange}
          name="username"
          placeholder="Username"
          type="text"
          value={signupFormValues.username}
        >
          <User />
        </InputWithIcon>
        <InputWithIcon
          validationError={emailError}
          onBlur={validateFormFields}
          onChange={handleInputChange}
          name="email"
          placeholder="E-mail"
          type="email"
          value={signupFormValues.email}
        >
          <Mail />
        </InputWithIcon>

        <InputWithIcon
          validationError={passwordError}
          onBlur={validateFormFields}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
          type="password"
          value={signupFormValues.password}
        >
          <Key />
        </InputWithIcon>
        <InputWithIcon
          validationError={confirmPasswordError}
          onChange={handleInputChange}
          onBlur={validateFormFields}
          name="passwordConfirm"
          placeholder="Confirm Password"
          type="password"
          value={signupFormValues.passwordConfirm}
        >
          <Key />
        </InputWithIcon>
        <Row>
          <FormErrorMessage message={errorMessage} />
        </Row>
      </Column>
      <Row>
        <Button>Sign Up</Button>
      </Row>
    </Form>
  )
}

export default SignupComponent
