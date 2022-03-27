import { PageWrapper, SigninComponent, SignupComponent } from '@/components'
import colors from '@/constants/colors'
import React, { useState } from 'react'
import styled from 'styled-components'

const LoginPage: React.FC = () => {
  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.green.primary};
  `

  const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    background: rebeccapurple;
  `

  const Column = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: aliceblue;
  `
  const Info = styled.div`
    width: 100%;
  `

  const TextSecondary = styled.h3``
  const TextPrimary = styled.h2``

  const ChangeLoginType = styled.div``
  const ChangeLoginTypeText = styled.span``
  const ChangeLoginTypeButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${colors.yellow.primary};
  `

  const [isSignup, setIsSignup] = useState(false)

  const handleClick = () => {
    setIsSignup(!isSignup)
  }

  return (
    <PageWrapper>
      <Wrapper>
        <Container>
          <Column>
            <Info>
              <TextSecondary>Start For Free</TextSecondary>
              <TextPrimary>Create a new account</TextPrimary>
              <ChangeLoginType>
                <ChangeLoginTypeText>
                  {isSignup ? 'Already have an account?' : "Don't have an account?"}
                </ChangeLoginTypeText>
                <ChangeLoginTypeButton onClick={handleClick}>{isSignup ? 'Sign in' : 'Sign up'}</ChangeLoginTypeButton>
              </ChangeLoginType>
            </Info>
            {isSignup ? <SignupComponent /> : <SigninComponent />}
          </Column>
        </Container>
      </Wrapper>
    </PageWrapper>
  )
}

export default LoginPage
