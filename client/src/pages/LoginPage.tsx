import { InnerWrapper, JustifyBetweenColumn, PageWrapper, SigninComponent, SignupComponent } from '@/components'
import colors from '@/constants/colors'
import useAccessStore from '@/hooks/useAccessStore'
import { useAuth } from '@/hooks/useAuth'
import { selectUser } from '@/store'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.green.primary};
  background: linear-gradient(-45deg, ${colors.green.primary} 0%, ${colors.yellow.primary} 100%);
  background-size: 150% 150%;
  animation: ${rotate} 10s ease-in-out infinite;
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
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${colors.yellow.primary};
`

const LoginPage: React.FC = () => {
  const {
    loggedUser: { accessToken, user }
  } = useAuth()

  const navigate = useNavigate()
  const [isSignup, setIsSignup] = useState(false)

  const handleClick = () => {
    setIsSignup(!isSignup)
  }

  useEffect(() => {
    if (accessToken && user) {
      navigate('/')
    }
  }, [accessToken, user, navigate])

  return (
    <PageWrapper>
      <Wrapper>
        <Link to={'/'}>Home</Link>
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
