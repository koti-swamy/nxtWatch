import styled from 'styled-components'

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
