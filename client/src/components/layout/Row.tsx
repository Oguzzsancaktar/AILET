import { RowStyled } from '@/shared'
import React from 'react'

interface Props {}

const Row: React.FC<Props> = ({ children, ...rest }) => {
  return <RowStyled>{children}</RowStyled>
}

export default Row
