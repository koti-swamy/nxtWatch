import styled from 'styled-components'

export const TrendLiContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  margin-right: 20px;
`

export const TrendThumbImg = styled.img`
  height: 150px;
  margin-right: 20px;
  @media screen and(max-width:765px) {
    height: 150px;
  }
`

export const TrendDescCard = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendTitle = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 10px;
`
export const TrendPara = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
  margin-top: 0px;
  margin-bottom: 10px;
`
