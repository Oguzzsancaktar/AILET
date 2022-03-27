import React from 'react'
import styled from 'styled-components'

interface Props {}
const JustifyBetweenColumnStyled = styled.div`
  width: 100%;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const JustifyBetweenColumn: React.FC<Props> = ({ children, ...rest }) => {
  return <JustifyBetweenColumnStyled>{children}</JustifyBetweenColumnStyled>
}

export default JustifyBetweenColumn
