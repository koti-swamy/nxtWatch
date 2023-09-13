import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`
export const HomeCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : 'white')};
  height: 100%;
  width: 100vw;
`
export const PremiumContainer = styled.ul`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  display: ${props => (props.isShowPremium ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
  width: 100%;
  padding-bottom: 30px;
`
export const GetItNowContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`
export const HomeWsLogo = styled.img`
  height: 30px;
  width: 100px;
`

export const GinDescription = styled.p`
  color: #00306e;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
`

export const GetItNowBtn = styled.button`
  border: 2px solid #00306e;
  background-color: transparent;
  color: #00306e;
  height: 28px;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`

export const PremiumCloseContainer = styled.li``

export const PremiumCloseBtn = styled.button`
  border: 0px;
  background-color: transparent;
  color: 'black';
  cursor: pointer;
  font-size: 20px;
`
export const GinBtnContainer = styled.div``

export const InputSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  width: 90%;
  margin-left: 40px;
  margin-bottom: 30px;
`

export const InputSearchEl = styled.input`
  width: 50%;
  border: 1px solid #616e7c;
  color: #616e7c;
  height: 30px;
  outline: none;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const InputSearchBtn = styled(PremiumCloseBtn)`
  color: #616e7c;
  border: 1px solid #616e7c;
  font-size: 15px;
  height: 30px;
  align-items: center;
  width: 60px;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#f1f5f9')};
`
