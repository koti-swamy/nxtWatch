import styled from 'styled-components'

export const HeaderBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
  height: 60px;
  padding-left: 40px;
  padding-right: 40px;
`
export const HeadWsLogo = styled.img`
  height: 25px;
  cursor: pointer;
`
export const HeaderRightCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const ThemeBtn = styled.button`
  border: 0px;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
  margin-top: 10px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const HeadProfileLogo = styled.img`
  height: 25px;
  margin-left: 10px;
  @media screen and (max-width: 765px) {
    display: none;
  }
`
export const HamburgerMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 765px) {
    display: flex;
    margin-left: 10px;
  }
`

export const LogoutBtnStyle = styled.button`
  margin-left: 20px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? 'white' : '#3b82f6')};
  border: ${props =>
    props.isDarkTheme ? '1px solid white' : '1px solid #3b82f6'};
  cursor: pointer;
  @media screen and (max-width: 765px) {
    display: none;
  }
`
export const LogoutIconStyle = styled.button`
  display: none;
  @media screen and (max-width: 765px) {
    display: flex;
    background-color: transparent;
    border: 0px;
    margin-left: 20px;
    font-weight: bold;
    color: ${props => (props.isDarkTheme ? 'white' : 'black')};
    font-size: 15px;
    cursor: pointer;
  }
`

export const HamCloseBtnCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const HamCloseBtn = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`

export const HamburgerMenu = styled.button`
  @media screen and (max-width: 765px) {
    background-color: transparent;
    border: 0px;
    font-weight: bold;
    color: ${props => (props.isDarkTheme ? 'white' : 'black')};
    font-size: 15px;
    cursor: pointer;
  }
`
