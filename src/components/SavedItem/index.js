import {Link} from 'react-router-dom'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import {
  TrendLiContainer,
  TrendThumbImg,
  TrendDescCard,
  TrendTitle,
  TrendPara,
} from './styledComponent'

import './index.css'

const SavedItem = props => {
  const {savedItem} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    viewCount,
    publishedAt,
  } = savedItem

  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="link-style-1">
            <TrendLiContainer>
              <TrendThumbImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendDescCard>
                <TrendTitle isDarkTheme={isDarkTheme}>{title}</TrendTitle>
                <TrendPara isDarkTheme={isDarkTheme}>{channelName}</TrendPara>
                <TrendPara isDarkTheme={isDarkTheme}>
                  {viewCount} views . {publishedAt}
                </TrendPara>
              </TrendDescCard>
            </TrendLiContainer>
          </Link>
        )
      }}
    </YoutubeContext.Consumer>
  )
}

export default SavedItem
