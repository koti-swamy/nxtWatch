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
  height: 100vh;
`
export const TrendCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : 'white')};
  background-size: cover;
  height: 100%;
  width: 100vw;
`
export const TrendTopContainer = styled.ul`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ebebeb')};
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 1400px) {
    width: 80vw;
  }
`
export const TrendIconContainer = styled.li`
  background-color: ${props => (props.isDarkTheme ? 'black' : '#d7dfe9')};
  color: red;
  font-size: 30px;
  height: 70px;
  border-radius: 100px;
  margin-left: 40px;
  margin-right: 20px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TrendHeadCard = styled.li`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const TrendHead = styled.h1``
