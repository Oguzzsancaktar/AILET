import React from 'react'
import styled from 'styled-components'

interface Props {}
const ColumnSC = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Column: React.FC<Props> = ({ children, ...rest }) => {
  return <ColumnSC>{children}</ColumnSC>
}

export default Column
