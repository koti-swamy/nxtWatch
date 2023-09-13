import {Link} from 'react-router-dom'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import {
  TrendLiContainer,
  TrendThumbImg,
  TrendDescCard,
  TrendTitle,
  TrendPara,
} from './StyledComponent'

import './index.css'

const TrendItem = props => {
  const {trendItem} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    viewCount,
    publishedAt,
  } = trendItem

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

export default TrendItem
