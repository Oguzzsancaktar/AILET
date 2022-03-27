import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'

interface Props {
  type: string
  placeholder: string
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.green.thirth};
  background-color: transparent;
  transition: border 0.3s ease-in-out;
  outline: none;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;
  &:hover,
  &:focus {
    border-color: ${colors.yellow.primary};
  }
`

const InputRegular: React.FC<Props> = (props: Props) => {
  return <Input type="text" placeholder="Enter your name" />
}

export default InputRegular
