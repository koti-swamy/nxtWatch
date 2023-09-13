import styled from 'styled-components'

export const GamingLiContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 40px;
`

export const GamingImg = styled.img`
  height: 300px;
`
export const GamingHeading = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-size: 15px;
  margin-bottom: 0px;
`

export const GamingPara = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
  margin-top: 0px;
`
