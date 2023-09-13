import {Link} from 'react-router-dom'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import {
  VideoListContainer,
  ItemThumbImg,
  VideoTitleContainer,
  ChannelProfileImg,
  VideoTitleCard,
  ChannelDesc,
  ChannelPara,
} from './StyledComponents'

import './index.css'

const VideoItem = props => {
  const {videoItem} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelProfileImageUrl,
    viewCount,
    publishedAt,
  } = videoItem

  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="link-style">
            <VideoListContainer>
              <ItemThumbImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoTitleContainer>
                <ChannelProfileImg
                  src={channelProfileImageUrl}
                  alt="channel logo"
                />
                <VideoTitleCard>
                  <ChannelDesc isDarkTheme={isDarkTheme}>{title}</ChannelDesc>
                  <ChannelPara isDarkTheme={isDarkTheme}>
                    {channelName}
                  </ChannelPara>
                  <ChannelPara isDarkTheme={isDarkTheme}>
                    {viewCount} views . {publishedAt}
                  </ChannelPara>
                </VideoTitleCard>
              </VideoTitleContainer>
            </VideoListContainer>
          </Link>
        )
      }}
    </YoutubeContext.Consumer>
  )
}

export default VideoItem
