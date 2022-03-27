import React from 'react'
import styled from 'styled-components'

interface Props {}
const InnerWrapper: React.FC<Props> = ({ children, ...rest }) => {
  const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 1rem;
  `
  return <Wrapper>{children}</Wrapper>
}

export default InnerWrapper
