import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'

interface Props {
  type: string
  placeholder: string
}

const RegularInput: React.FC<Props> = (props: Props) => {
  const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 2px solid ${colors.green.primary};
    transition: border 0.3s ease-in-out;
    outline: none;
    &:hover,
    &:focus {
      border-color: ${colors.yellow.primary};
    }
  `
  return (
    <div>
      <Input type="text" placeholder="Enter your name" />
    </div>
  )
}

export default RegularInput
