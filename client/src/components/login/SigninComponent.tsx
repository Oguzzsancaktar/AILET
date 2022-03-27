import React from 'react'
import { Button, Form, InputRegular, JustifyBetweenRow, Column, InputCheckbox } from '@/components'

interface Props {}
const SigninComponent: React.FC<Props> = () => {
  return (
    <Form>
      <Column>
        <InputRegular placeholder="Username" type="text" />
        <InputRegular placeholder="Password" type="password" />
      </Column>
      <JustifyBetweenRow>
        <InputCheckbox />
        <Button>Sign In</Button>
      </JustifyBetweenRow>
    </Form>
  )
}

export default SigninComponent
