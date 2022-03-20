import { Form, Input } from 'antd'
import React from 'react'

const SigninComponent = () => {
  return (
    <div>
      <Form>
        <Input placeholder="Username" type="text" />
        <Input placeholder="Password" type="password" />
      </Form>
    </div>
  )
}

export default SigninComponent
