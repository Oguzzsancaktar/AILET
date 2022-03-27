import React from 'react'
import styled from 'styled-components'

interface Props {}

const Row: React.FC<Props> = ({ children, ...rest }) => {
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `
  return <Row>{children}</Row>
}

export default Row
