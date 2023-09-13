import {Link} from 'react-router-dom'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import {
  GamingLiContainer,
  GamingImg,
  GamingHeading,
  GamingPara,
} from './styledComponent'
import './index.css'

const GamingItem = props => {
  const {gamingItem} = props

  const {id, title, thumbnailUrl, viewCount} = gamingItem

  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link-style-3">
            <GamingLiContainer>
              <GamingImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingHeading isDarkTheme={isDarkTheme}>{title}</GamingHeading>
              <GamingPara isDarkTheme={isDarkTheme}>{viewCount}</GamingPara>
            </GamingLiContainer>
          </Link>
        )
      }}
    </YoutubeContext.Consumer>
  )
}

export default GamingItem
