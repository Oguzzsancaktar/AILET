import React, { useMemo, useState } from 'react'
import { Form, InputRegular, Button, Row } from '@/components'
import { Column } from '../layout'
import useAccessStore from '@/hooks/useAccessStore'
import { IUserCreateDTO } from '@/models'
import { createUser } from '@/services/userService'
import { FormErrorMessage } from '../form'

type IProps = {}

type ISignupFormValues = IUserCreateDTO & { passwordConfirm: string }

const SignupComponent: React.FC<IProps> = () => {
  const { useAppDispatch } = useAccessStore()
  const dispatch = useAppDispatch()

  const [usernameError, setUsernameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const isFormOk = useMemo(
    () => !usernameError && !emailError && !passwordError && !confirmPasswordError,
    [usernameError, emailError, passwordError, confirmPasswordError]
  )

  const [errorMessage, setErrorMessage] = useState('')

  const [signupFormValues, setSignupFormValues] = useState<ISignupFormValues>({
    username: 'sancaktar',
    email: 'info@oguzsancaktar.com',
    password: '12341234',
    passwordConfirm: '12341234'
  })

  const handlePasswordConfirm = (values: ISignupFormValues) => {
    setUsernameError(false)
    setEmailError(false)
    setPasswordError(false)
    setConfirmPasswordError(false)
    setErrorMessage('')

    if (values.username.trim().length < 6) {
      setErrorMessage('Username must be at least 6 characters long')
      return setUsernameError(true)
    }
    if (
      !values.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setErrorMessage('Please enter a valid email')
      return setEmailError(true)
    }

    if (values.password.trim().length < 6) {
      setErrorMessage('Password must be at least 6 characters long')
      return setPasswordError(true)
    }

    if (values.password.trim() !== values.passwordConfirm.trim()) {
      setErrorMessage('Password and Confirm Password must be same')
      setPasswordError(true)
      return setConfirmPasswordError(true)
    }
  }

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handlePasswordConfirm(signupFormValues)
    try {
      if (isFormOk) {
        await createUser(signupFormValues)
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
        <InputRegular
          validationError={usernameError}
          onChange={handleInputChange}
          name="username"
          placeholder="Username"
          type="text"
          value={signupFormValues.username}
        />
        <InputRegular
          validationError={emailError}
          onChange={handleInputChange}
          name="email"
          placeholder="E-mail"
          type="email"
          value={signupFormValues.email}
        />

        <InputRegular
          validationError={passwordError}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
          type="password"
          value={signupFormValues.password}
        />
        <InputRegular
          validationError={confirmPasswordError}
          onChange={handleInputChange}
          name="passwordConfirm"
          placeholder="Confirm Password"
          type="password"
          value={signupFormValues.passwordConfirm}
        />
      </Column>
      {errorMessage && (
        <Row>
          <FormErrorMessage message={errorMessage} />
        </Row>
      )}
      <Row>
        <Button>Sign Up</Button>
      </Row>
    </Form>
  )
}

export default SignupComponent
