import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'

interface Props {
  content?: string
}
const Button: React.FC<Props> = ({ children, ...rest }) => {
  const Button = styled.button`
    font-family: 'Chillax-Bold';
    cursor: pointer;
    padding: 0.4rem 0.6rem;
    border-radius: 0.3rem;
    border: 1px solid ${colors.green.primary};
    background-color: ${colors.green.primary};
    color: ${colors.green.light};
    transition: background 0.3s ease-in-out;
    &:hover {
      background-color: ${colors.green.secondary};
    }
  `
  return <Button>{children}</Button>
}

export default Button
