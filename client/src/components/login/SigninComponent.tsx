import React from 'react'
import { Button, Form, Input, Row, InnerWrapper } from '@/components'

interface Props {}
const SigninComponent: React.FC<Props> = () => {
  return (
    <Form>
      <InnerWrapper>
        <Row>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
        </Row>
        <Row>
          <Button>Sign In</Button>
        </Row>
      </InnerWrapper>
    </Form>
  )
}

export default SigninComponent
