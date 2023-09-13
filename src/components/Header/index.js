import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'

import {HiMoon} from 'react-icons/hi'

import {BsSun} from 'react-icons/bs'

import {MdClose} from 'react-icons/md'

import {GiHamburgerMenu} from 'react-icons/gi'

import {FiLogOut} from 'react-icons/fi'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import 'reactjs-popup/dist/index.css'

import {
  HeaderBg,
  HeadWsLogo,
  HeaderRightCard,
  ThemeBtn,
  HeadProfileLogo,
  HamburgerMenuContainer,
  LogoutBtnStyle,
  LogoutIconStyle,
  HamCloseBtnCard,
  HamCloseBtn,
  HamburgerMenu,
} from './styledComponent'

import './index.css'

const Header = props => {
  const {history} = props
  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkTheme, onTheme} = value

        const onLogout = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const logoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderBg isDarkTheme={isDarkTheme}>
            <Link to="/" className="filter-ham-style">
              <div className="header-ws-logo-container">
                <HeadWsLogo src={logoUrl} alt="website logo" />
              </div>
            </Link>
            <HeaderRightCard>
              <ThemeBtn
                isDarkTheme={isDarkTheme}
                type="button"
                onClick={onTheme}
                data-testid="theme"
              >
                {isDarkTheme ? <BsSun /> : <HiMoon />}
              </ThemeBtn>
              <HeadProfileLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <HamburgerMenuContainer>
                <Popup
                  modal
                  className="popup-content"
                  trigger={
                    <HamburgerMenu isDarkTheme={isDarkTheme} type="button">
                      <GiHamburgerMenu />
                    </HamburgerMenu>
                  }
                  position="top right"
                >
                  {close => (
                    <div className="ham-menu-container">
                      <HamCloseBtnCard>
                        <HamCloseBtn type="button" onClick={() => close()}>
                          <MdClose />{' '}
                        </HamCloseBtn>
                      </HamCloseBtnCard>
                      <ul type="none" className="ham-menu-card">
                        <Link to="/" className="filter-ham-style">
                          <li>Home</li>
                        </Link>
                        <Link to="/trending" className="filter-ham-style">
                          <li>Trending</li>
                        </Link>
                        <Link to="/gaming" className="filter-ham-style">
                          <li>Gaming</li>
                        </Link>
                        <Link to="/saved-videos" className="filter-ham-style">
                          <li>Saved videos</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </Popup>
              </HamburgerMenuContainer>

              <Popup
                modal
                className="popup-content"
                trigger={
                  <LogoutBtnStyle isDarkTheme={isDarkTheme} type="button">
                    Logout
                  </LogoutBtnStyle>
                }
              >
                {close => (
                  <div className="logout-container">
                    <p className="logout-head">
                      Are you sure, you want to logout
                    </p>
                    <div className="btn-container">
                      <button
                        type="button"
                        onClick={() => close()}
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={onLogout}
                        className="confirm-btn"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </Popup>

              <Popup
                modal
                className="popup-content"
                trigger={
                  <LogoutIconStyle
                    isDarkTheme={isDarkTheme}
                    type="button"
                    onClick={onLogout}
                  >
                    <FiLogOut />
                  </LogoutIconStyle>
                }
              >
                {close => (
                  <div className="logout-container">
                    <p className="logout-head">Are you sure want to logout?</p>
                    <div className="btn-container">
                      <button
                        type="button"
                        onClick={() => close()}
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={onLogout}
                        className="confirm-btn"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </HeaderRightCard>
          </HeaderBg>
        )
      }}
    </YoutubeContext.Consumer>
  )
}

export default withRouter(Header)
