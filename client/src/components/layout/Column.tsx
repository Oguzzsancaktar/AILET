import React from 'react'
import styled from 'styled-components'

interface Props {}
const Column: React.FC<Props> = ({ children, ...rest }) => {
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  return <Column>{children}</Column>
}

export default Column
