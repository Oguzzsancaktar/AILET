import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string[]
  isChecked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface StyledProps {
  checked: boolean
}
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<StyledProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

const Checkbox: React.FC<Props> = ({ className, isChecked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={isChecked} {...props} />
    <StyledCheckbox checked={isChecked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
