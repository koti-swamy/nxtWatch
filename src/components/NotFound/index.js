import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import Header from '../Header/index'

import Filter from '../FilterComponent/index'

import {
  TrendNoResultContainer,
  TrendNoResultImg,
  TrendNrHeading,
  TrendNrDesc,
  TrendContainer,
  TrendCard,
} from './styledComponent'

const NotFound = () => (
  <YoutubeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <TrendContainer>
            <Filter />
            <TrendCard isDarkTheme={isDarkTheme}>
              <TrendNoResultContainer>
                <TrendNoResultImg src={notFoundUrl} alt="not found" />
                <TrendNrHeading isDarkTheme={isDarkTheme}>
                  Page Not Found
                </TrendNrHeading>
                <TrendNrDesc isDarkTheme={isDarkTheme}>
                  we are sorry, the page you requested could not be found.
                </TrendNrDesc>
              </TrendNoResultContainer>
            </TrendCard>
          </TrendContainer>
        </>
      )
    }}
  </YoutubeContext.Consumer>
)

export default NotFound
