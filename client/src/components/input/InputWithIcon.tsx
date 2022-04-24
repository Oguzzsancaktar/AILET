import styled from 'styled-components'
import colors from '@/constants/colors'
import { RowStyled } from '@/shared'
import { Eye, EyeOff } from 'react-feather'

interface Props {
  type: string
  placeholder: string
  name: string
  validationError?: boolean
  value?: string
  isPasswordVisible?: boolean
  handleVisibility?: (isVisible: boolean) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

interface IStyledProps {
  validationError?: boolean
}

const Container = styled(RowStyled)<IStyledProps>`
  border-bottom: 1px solid ${props => (props.validationError ? colors.red.primary : colors.green.thirth)};
  color: ${props => (props.validationError ? colors.red.primary : colors.green.thirth)};
  margin-bottom: 0.5rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${colors.yellow.primary};
  }

  &:focus-within {
    border-bottom: 1px solid ${colors.yellow.primary};
    color: ${colors.yellow.primary};
  }
`
const Input = styled.input<IStyledProps>`
  color: ${props => (props.validationError ? colors.red.primary : colors.green.thirth)};
  width: 100%;
  height: 40px;
  background-color: transparent;
  outline: none;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.3rem;
  transition: all 0.4s ease-in-out;

  &:focus {
    color: ${colors.yellow.primary};
  }
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 0.3rem;
`

const InputWithIcon: React.FC<Props> = ({
  children,
  validationError,
  type,
  isPasswordVisible,
  handleVisibility,
  onBlur,
  ...rest
}) => {
  return (
    <Container validationError={validationError}>
      <IconContainer>{children}</IconContainer>
      <Input onBlur={onBlur} validationError={validationError} type={type} {...rest} />
      {handleVisibility &&
        (isPasswordVisible ? (
          <Eye style={{ cursor: 'pointer' }} onClick={() => handleVisibility(isPasswordVisible)} />
        ) : (
          <EyeOff style={{ cursor: 'pointer' }} onClick={() => handleVisibility(!isPasswordVisible)} />
        ))}
    </Container>
  )
}

export default InputWithIcon
