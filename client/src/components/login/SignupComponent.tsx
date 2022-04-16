import React, { useState } from 'react'
import { Form, InputRegular, Button, Row } from '@/components'
import { Column } from '../layout'
import useAccessStore from '@/hooks/useAccessStore'
import { IUserCreateDTO } from '@/models'
import { createUser } from '@/services/userService'

const SignupComponent = () => {
  const { useAppDispatch } = useAccessStore()
  const dispatch = useAppDispatch()
  const [signupFormValues, setSignupFormValues] = useState<IUserCreateDTO>()

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (signupFormValues) {
        const result = await createUser(signupFormValues)
        console.log('result', result)
      } else {
        console.log('enter signupFormValues', signupFormValues)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormValues({ ...signupFormValues, [event.target.name]: event.target.value } as IUserCreateDTO)
  }

  return (
    <Form onSubmit={handleSignUp}>
      <Column>
        <InputRegular onChange={handleInputChange} name="username" placeholder="Username" type="text" />
        <InputRegular onChange={handleInputChange} name="password" placeholder="Password" type="password" />
        <InputRegular
          onChange={handleInputChange}
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />
        <InputRegular onChange={handleInputChange} name="email" placeholder="E-mail" type="email" />
      </Column>
      <Row>
        <Button>Sign Up</Button>
      </Row>
    </Form>
  )
}

export default SignupComponent
