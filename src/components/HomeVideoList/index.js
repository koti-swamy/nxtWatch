import Loader from 'react-loader-spinner'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import VideoItem from '../VideoItem/index'

import './index.css'

import {
  NoResultContainer,
  NoResultImg,
  NrHeading,
  NrDesc,
  RetryBtn,
} from './StyledComponent'

const HomeVideoList = props => {
  const {videosList, homeStatus, getHomeDetails} = props
  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const getNolistView = () => (
          <NoResultContainer>
            <NoResultImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NrHeading isDarkTheme={isDarkTheme}>
              No Search results found
            </NrHeading>
            <NrDesc isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </NrDesc>
            <RetryBtn type="button" onClick={getHomeDetails}>
              Retry
            </RetryBtn>
          </NoResultContainer>
        )

        const getSuccessView = () => {
          if (videosList.length !== 0) {
            return (
              <ul className="videoListContainer" type="none">
                {videosList.map(eachItem => (
                  <VideoItem videoItem={eachItem} key={eachItem.publishedAt} />
                ))}
              </ul>
            )
          }
          return getNolistView()
        }

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
            <NoResultContainer>
              <NoResultImg src={failureUrl} alt="failure view" />
              <NrHeading isDarkTheme={isDarkTheme}>
                Oops! Something Went Wrong
              </NrHeading>
              <NrDesc isDarkTheme={isDarkTheme}>
                We are having some trouble to complete your request.
              </NrDesc>
              <NrDesc isDarkTheme={isDarkTheme}>Please try again.</NrDesc>
              <RetryBtn type="button" onClick={getHomeDetails}>
                Retry
              </RetryBtn>
            </NoResultContainer>
          )
        }

        let ui

        switch (homeStatus) {
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

export default HomeVideoList
