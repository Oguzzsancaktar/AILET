import React from 'react'
import styled from 'styled-components'

interface Props {}

const FormSC = styled.form`
  width: 100%;
  height: auto;
`
const Form: React.FC<Props> = ({ children, ...rest }) => {
  return <FormSC>{children}</FormSC>
}

export default Form
