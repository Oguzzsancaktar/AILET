import React from 'react'

import { Form, InputRegular, Button, Row } from '@/components'
import { Column } from '../layout'

const SignupComponent = () => {
  return (
    <Form>
      <Column>
        <InputRegular placeholder="Name" type="text" />
        <InputRegular placeholder="Surname" type="text" />
        <InputRegular placeholder="Username" type="text" />
        <InputRegular placeholder="Password" type="password" />
        <InputRegular placeholder="Confirm Password" type="password" />
        <InputRegular placeholder="E-mail" type="email" />
        <InputRegular placeholder="Phone" type="tel" />
      </Column>

      <Row>
        <Button>Sign Up</Button>
      </Row>
    </Form>
  )
}

export default SignupComponent
