import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import {
  LoginBgContainer,
  LoginContainer,
  LoginWebsiteLogoContainer,
  LoginWebsiteLogo,
  InputCard,
  InputStyle,
  CheckboxCard,
  LoginBtnCard,
  LoginBtnStyle,
  ErrorMsg,
} from './StyledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    errorMsg: '',
    isError: false,
  }

  onUserInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onCheckboxInput = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onLoginBtn = event => {
    event.preventDefault()
    this.getLoginDetails()
  }

  getLoginDetails = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const loginUrl = 'https://apis.ccbp.in/login'

    const response = await fetch(loginUrl, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      this.getLoginSuccess(fetchedData.jwt_token)
    } else {
      this.setState({isError: true, errorMsg: fetchedData.error_msg})
    }
  }

  getLoginSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  render() {
    const {username, password, isShowPassword, isError, errorMsg} = this.state
    const showPassword = isShowPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginBgContainer isDarkTheme={isDarkTheme}>
              <LoginContainer isDarkTheme={isDarkTheme}>
                <LoginWebsiteLogoContainer>
                  <LoginWebsiteLogo src={logoUrl} alt="website logo" />
                </LoginWebsiteLogoContainer>
                <form onSubmit={this.onLoginBtn}>
                  <InputCard isDarkTheme={isDarkTheme}>
                    <label htmlFor="username">USERNAME</label>
                    <InputStyle
                      onChange={this.onUserInput}
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={username}
                      isDarkTheme={isDarkTheme}
                    />
                  </InputCard>
                  <InputCard isDarkTheme={isDarkTheme}>
                    <label htmlFor="password">PASSWORD</label>
                    <InputStyle
                      onChange={this.onPasswordInput}
                      type={showPassword}
                      id="password"
                      placeholder="Password"
                      value={password}
                      isDarkTheme={isDarkTheme}
                    />
                  </InputCard>
                  <CheckboxCard isDarkTheme={isDarkTheme}>
                    <input
                      type="checkbox"
                      id="checkbox"
                      onClick={this.onCheckboxInput}
                      value={isShowPassword}
                      style={{cursor: 'pointer'}}
                    />
                    <label htmlFor="checkbox">Show Password</label>
                  </CheckboxCard>
                  <LoginBtnCard>
                    <LoginBtnStyle type="submit">Login</LoginBtnStyle>
                  </LoginBtnCard>
                  {isError && (
                    <ErrorMsg isDarkTheme={isDarkTheme}>*{errorMsg}</ErrorMsg>
                  )}
                </form>
              </LoginContainer>
            </LoginBgContainer>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}

export default LoginForm
