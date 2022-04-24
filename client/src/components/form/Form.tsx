import React from 'react'
import styled from 'styled-components'

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormSC = styled.form`
  width: 100%;
  height: auto;
`
const Form: React.FC<Props> = ({ children, onSubmit, ...rest }) => {
  return <FormSC onSubmit={onSubmit}>{children}</FormSC>
}

export default Form
