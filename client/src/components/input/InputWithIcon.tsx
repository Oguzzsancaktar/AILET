import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'
import { Row, InputRegular } from '@/components'

interface Props {
  type: string
  placeholder: string
}

const InputWithIcon: React.FC<Props> = (props: Props) => {
  return (
    <Row>
      <InputRegular type="text" placeholder="Enter your name" />
    </Row>
  )
}

export default InputWithIcon
