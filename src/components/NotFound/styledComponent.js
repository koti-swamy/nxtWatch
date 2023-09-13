import styled from 'styled-components'

export const TrendNoResultContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendNoResultImg = styled.img`
  height: 300px;
  @media screen and(max-width:765px) {
    height: 100px;
  }
`
export const TrendNrHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? 'White' : 'Black')};
`
export const TrendNrDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#00306e')};
  font-size: 15px;
`
export const TrendContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`
export const TrendCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : 'white')};
  background-size: cover;
  height: 100%;
  width: 100vw;
`
