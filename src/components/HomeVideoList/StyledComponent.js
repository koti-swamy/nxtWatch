import styled from 'styled-components'

export const NoResultContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoResultImg = styled.img`
  height: 300px;
  @media screen and(max-width:765px) {
    height: 100px;
  }
`
export const NrHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? 'White' : 'Black')};
`
export const NrDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#00306e')};
  font-size: 15px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  border: 0px;
  color: white;
  height: 28px;
  width: 62px;
  align-items: center;
`
