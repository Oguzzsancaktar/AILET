import React from 'react'

import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Button, Form, Input } from 'antd'

const SignupComponent = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" type="text" />
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Surname" type="text" />
      </Form.Item>

      <Form.Item>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" type="text" />
      </Form.Item>

      <Form.Item>
        <Input.Password
          prefix={<KeyOutlined className="site-form-item-icon" />}
          placeholder="Password"
          type="password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Input.Password
          prefix={<KeyOutlined className="site-form-item-icon" />}
          placeholder="Confirm Password"
          type="password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>

      <Form.Item>
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" type="email" />
        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone" type="tel" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SignupComponent
