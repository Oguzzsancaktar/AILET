import React from 'react'
import { Row, InputRegular } from '@/components'

interface Props {
  type: string
  placeholder: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputWithIcon: React.FC<Props> = ({ ...rest }) => {
  return (
    <Row>
      <InputRegular {...rest} />
    </Row>
  )
}

export default InputWithIcon
