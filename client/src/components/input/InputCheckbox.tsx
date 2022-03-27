import React, { useState } from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'

const Label = styled.label``
const Span = styled.span`
  margin-left: 0.5rem;
`

const InputCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <Label>
      <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
      <Span>Label Text</Span>
    </Label>
  )
}

export default InputCheckbox
