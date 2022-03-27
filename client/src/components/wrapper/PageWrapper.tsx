import React from 'react'
import styled from 'styled-components'

interface Props {}
const PageWrapper: React.FC<Props> = ({ children, ...rest }) => {
  const Wrapper = styled.div`
    width: 100%;
    margin: 0;
  `
  return <Wrapper>{children}</Wrapper>
}

export default PageWrapper
