import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'

interface Props {
  type: string
  placeholder: string
  name: string
  validationError?: boolean
  value?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
interface IStyledProps {
  validationError: boolean
}

const Input = styled.input<IStyledProps>`
  width: 100%;
  height: 40px;
  border: 1px solid ${props => (props.validationError ? colors.red.primary : colors.green.thirth)};
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

const InputRegular: React.FC<Props> = ({ placeholder, value, name, type, validationError = false, onChange }) => {
  return (
    <Input
      validationError={validationError}
      onChange={onChange}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default InputRegular
