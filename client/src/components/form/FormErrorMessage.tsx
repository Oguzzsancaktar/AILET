import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  message: string
}

const Message = styled.p`
  color: ${colors.red.primary};
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`

const FormErrorMessage: React.FC<IProps> = ({ message }) => {
  return <Message>{message}</Message>
}

export default FormErrorMessage
