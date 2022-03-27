import React from 'react'

import { Form, Input, Button, Row } from '@/components'

const SignupComponent = () => {
  return (
    <Form>
      <Row>
        <Input placeholder="Name" type="text" />
        <Input placeholder="Surname" type="text" />
      </Row>

      <Row>
        <Input placeholder="Username" type="text" />
      </Row>

      <Row>
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
      </Row>

      <Row>
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Phone" type="tel" />
      </Row>

      <Row>
        <Button>Sign Up</Button>
      </Row>
    </Form>
  )
}

export default SignupComponent
