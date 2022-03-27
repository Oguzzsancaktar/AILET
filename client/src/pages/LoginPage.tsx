import { Column, InnerWrapper, JustifyBetweenColumn, PageWrapper, SigninComponent, SignupComponent } from '@/components'
import colors from '@/constants/colors'
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.green.primary};
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-height: 600px;
  max-width: 300px;
  margin: auto;
  position: absolute;
  padding: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  margin: auto;
`

const ChangeLoginType = styled.div``
const ChangeLoginTypeText = styled.span``
const ChangeLoginTypeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.yellow.primary};
`

const LoginPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false)

  const handleClick = () => {
    setIsSignup(!isSignup)
  }

  return (
    <PageWrapper>
      <Wrapper>
        <Container>
          <InnerWrapper>
            <JustifyBetweenColumn>
              {isSignup ? <SignupComponent /> : <SigninComponent />}
              <ChangeLoginType>
                <ChangeLoginTypeText>
                  {isSignup ? 'Already have an account?' : "Don't have an account?"}
                </ChangeLoginTypeText>
                <ChangeLoginTypeButton onClick={handleClick}>{isSignup ? 'Sign in' : 'Sign up'}</ChangeLoginTypeButton>
              </ChangeLoginType>
            </JustifyBetweenColumn>
          </InnerWrapper>
        </Container>
      </Wrapper>
    </PageWrapper>
  )
}

export default LoginPage
