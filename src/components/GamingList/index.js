import Loader from 'react-loader-spinner'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import GamingItem from '../GamingItem/index'

import './index.css'

import {
  TrendNoResultContainer,
  TrendNoResultImg,
  TrendNrHeading,
  TrendRetryBtn,
  TrendNrDesc,
} from './styledComponent'

const TrendVideoList = props => {
  const {gamingList, gamingStatus, getGamingDetails} = props

  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const getSuccessView = () => (
          <ul className="trendVideoListContainer1" type="none">
            {gamingList.map(eachItem => (
              <GamingItem gamingItem={eachItem} key={eachItem.publishedAt} />
            ))}
          </ul>
        )

        const getLoadingView = () => {
          const colors = isDarkTheme ? 'white' : 'blue'
          return (
            <div className="loader-container loading" data-testid="loader">
              <Loader type="ThreeDots" color={colors} height="50" width="50" />
            </div>
          )
        }

        const getFailureView = () => {
          const failureUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          return (
            <TrendNoResultContainer>
              <TrendNoResultImg src={failureUrl} alt="failure view" />
              <TrendNrHeading isDarkTheme={isDarkTheme}>
                Oops! Something Went Wrong
              </TrendNrHeading>
              <TrendNrDesc isDarkTheme={isDarkTheme}>
                We are having some trouble to complete your request.
              </TrendNrDesc>
              <TrendNrDesc isDarkTheme={isDarkTheme}>
                Please try again.
              </TrendNrDesc>
              <TrendRetryBtn type="button" onClick={getGamingDetails}>
                Retry
              </TrendRetryBtn>
            </TrendNoResultContainer>
          )
        }

        let ui

        switch (gamingStatus) {
          case 'SUCCESS':
            ui = getSuccessView()
            break
          case 'FAILURE':
            ui = getFailureView()
            break
          case 'LOADING':
            ui = getLoadingView()
            break

          default:
            return null
        }
        return ui
      }}
    </YoutubeContext.Consumer>
  )
}

export default TrendVideoList
