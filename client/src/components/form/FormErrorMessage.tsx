import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  message: string
}

const Message = styled.p`
  color: ${colors.red.primary};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  height: 22px;
`

const FormErrorMessage: React.FC<IProps> = ({ message }) => {
  return <Message>{message}</Message>
}

export default FormErrorMessage
