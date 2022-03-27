import React from 'react'
import styled from 'styled-components'
interface Props {}
const Form: React.FC<Props> = ({ children, ...rest }) => {
  const Form = styled.form`
    width: 100%;
  `
  return <Form>{children}</Form>
}

export default Form
