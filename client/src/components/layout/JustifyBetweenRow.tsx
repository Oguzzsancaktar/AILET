import React from 'react'
import styled from 'styled-components'
import Row from './Row'

interface Props {}
const JustifyBetweenRowStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const JustifyBetweenRow: React.FC<Props> = ({ children, ...rest }) => {
  return <JustifyBetweenRowStyled>{children}</JustifyBetweenRowStyled>
}

export default JustifyBetweenRow
