import {HiFire} from 'react-icons/hi'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import Header from '../Header/index'

import Filter from '../FilterComponent/index'

import SavedItem from '../SavedItem/index'

import {
  TrendNoResultContainer,
  TrendNoResultImg,
  TrendNrHeading,
  TrendNrDesc,
  TrendContainer,
  TrendCard,
  TrendTopContainer,
  TrendIconContainer,
  TrendHead,
  TrendHeadCard,
} from './StyledComponent'

import './index.css'

const SavedVideos = () => (
  <YoutubeContext.Consumer>
    {value => {
      const {savedList, isDarkTheme} = value

      let ui

      if (savedList.length === 0) {
        ui = (
          <TrendNoResultContainer>
            <TrendNoResultImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <TrendNrHeading isDarkTheme={isDarkTheme}>
              No saved videos found
            </TrendNrHeading>
            <TrendNrDesc isDarkTheme={isDarkTheme}>
              You can save your videos while watching them
            </TrendNrDesc>
          </TrendNoResultContainer>
        )
      } else {
        ui = (
          <>
            <TrendTopContainer type="none" isDarkTheme={isDarkTheme}>
              <TrendIconContainer isDarkTheme={isDarkTheme}>
                <HiFire />
              </TrendIconContainer>
              <TrendHeadCard>
                <TrendHead isDarkTheme={isDarkTheme}>Saved Videos</TrendHead>
              </TrendHeadCard>
            </TrendTopContainer>
            <ul className="trendVideoListContainer" type="none">
              {savedList.map(eachItem => (
                <SavedItem savedItem={eachItem} key={eachItem.publishedAt} />
              ))}
            </ul>
          </>
        )
      }
      return (
        <>
          <Header />
          <TrendContainer>
            <Filter isSavedVideos />
            <TrendCard data-testid="savedVideos" isDarkTheme={isDarkTheme}>
              {ui}
            </TrendCard>
          </TrendContainer>
        </>
      )
    }}
  </YoutubeContext.Consumer>
)

export default SavedVideos
