import React from 'react'
import styled from 'styled-components'

interface Props {}

const RowSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Row: React.FC<Props> = ({ children, ...rest }) => {
  return <RowSC>{children}</RowSC>
}

export default Row
