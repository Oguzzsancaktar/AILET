import React from 'react'
import { Row } from '@/components'
import styled from 'styled-components'
import colors from '@/constants/colors'

interface Props {
  type: string
  placeholder: string
  name: string
  validationError?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface IStyledProps {
  validationError?: boolean
}

const Input = styled.input<IStyledProps>`
  width: 100%;
  height: 40px;
  border: 1px solid ${props => (props.validationError ? colors.red.primary : colors.green.thirth)};
  border-radius: 0.5rem;
  border-left: transparent;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: transparent;
  transition: border 0.3s ease-in-out;
  outline: none;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.3rem;

  &:hover,
  &:focus {
    transition: border 0.3s ease-in-out;
    border-color: ${colors.yellow.primary};
  }
`

const IconContainer = styled.div<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${props => (props.validationError ? colors.red.primary : colors.green.thirth)};
  border-radius: 0.5rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 0.3rem;

  &:hover,
  &:focus {
    transition: border 0.3s ease-in-out;
    border-color: ${colors.yellow.primary};
    ${Input} {
      display: none !important;
    }
  }
`

const InputWithIcon: React.FC<Props> = ({ children, validationError, ...rest }) => {
  return (
    <Row>
      <IconContainer validationError={validationError}>{children}</IconContainer>
      <Input validationError={validationError} {...rest} />
    </Row>
  )
}

export default InputWithIcon
