import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? 'black' : 'white')};
  height: 100vh;
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  height: 55%;
  width: 40%;
  background-color: ${props => (props.isDarkTheme ? 'black' : 'white')};
  background-size: cover;
  box-shadow: ${props => !props.isDarkTheme && '0px 0px 4px 4px #f1f1f1'};
  @media screen and (max-width: 576px) {
    width: 80%;
    height: 55%;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 60%;
    height: 55%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 45%;
    height: 55%;
  }
`

export const LoginWebsiteLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const LoginWebsiteLogo = styled.img`
  height: 50px;
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? 'white' : '#475569')};
  font-weight: bold;
  margin-top: 20px;
`
export const InputStyle = styled.input`
  color: #94a3b8;
  margin-top: 5px;
  height: 30px;
  padding-left: 10px;
  font-size: 13px;
  outline: none;
  border: 1px solid #94a3b8;
  border-radius: 5px;
`
export const CheckboxCard = styled.div`
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-weight: bold;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`

export const LoginBtnCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
`
export const LoginBtnStyle = styled.button`
  background-color: #4f46e5;
  border: 0px;
  border-radius: 5px;
  color: #ffffff;
  height: 30px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: ${props => (props.isDarkTheme ? '#ff0000' : '#ff0b37')};
  font-size: 10px;
  font-weight: bold;
`
