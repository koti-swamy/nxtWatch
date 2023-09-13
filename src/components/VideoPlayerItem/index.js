import {Component} from 'react'
import ReactPlayer from 'react-player'

import Loader from 'react-loader-spinner'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import {
  VideoPlayerItemContainer,
  VideoItemTitle,
  VideoViewContainer,
  VideoItemPara,
  VideoLikesContainer,
  VideoItemLike,
  Horizontal,
  VideoItemChannel,
  VideoChannelLogo,
  VideoChannelNameCard,
  VideoChannelTitle,
  VideoChannelSubscribers,
  VideoItemDesc,
  TrendNoResultContainer,
  TrendNoResultImg,
  TrendNrHeading,
  TrendRetryBtn,
  VideoItemDislike,
  TrendNrDesc,
  VideoItemSave,
} from './StyledComponent'

import './index.css'

class VideoPlayerItem extends Component {
  state = {isLike: false, isDislike: false}

  onLike = () => {
    this.setState({isLike: true, isDislike: false})
  }

  onDislike = () => {
    this.setState({isLike: false, isDislike: true})
  }

  render() {
    const {isLike, isDislike} = this.state
    const {videoItem, getVideoItemDetails, videoPlayerStatus} = this.props

    const {
      id,
      title,
      thumbnailUrl,
      channelName,
      channelProfileImageUrl,
      viewCount,
      publishedAt,
      videoUrl,
      subscriberCount,
      description,
    } = videoItem
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkTheme, onSave, savedList} = value

          const isSave = savedList.some(eachItem => eachItem.id === id)

          const onSaveBtn = () => {
            onSave(videoItem)
          }
          const getSuccessView = () => (
            <VideoPlayerItemContainer>
              <ReactPlayer
                width="100%"
                url={videoUrl}
                controls
                className="react-player"
              />

              <VideoItemTitle isDarkTheme={isDarkTheme}>{title}</VideoItemTitle>
              <VideoViewContainer isDarkTheme={isDarkTheme}>
                <VideoItemPara>
                  {viewCount} views . {publishedAt}
                </VideoItemPara>
                <VideoLikesContainer>
                  <VideoItemLike
                    isLike={isLike}
                    type="button"
                    onClick={this.onLike}
                  >
                    <BiLike /> Like
                  </VideoItemLike>

                  <VideoItemDislike
                    isDislike={isDislike}
                    type="button"
                    onClick={this.onDislike}
                  >
                    <BiDislike /> Dislike
                  </VideoItemDislike>

                  <VideoItemSave
                    isSave={isSave}
                    type="button"
                    onClick={onSaveBtn}
                  >
                    <BiListPlus /> {isSave ? 'Saved' : 'save'}
                  </VideoItemSave>
                </VideoLikesContainer>
              </VideoViewContainer>
              <Horizontal isDarkTheme={isDarkTheme} />
              <VideoItemChannel>
                <VideoChannelLogo
                  src={channelProfileImageUrl}
                  alt="channel logo"
                />
                <VideoChannelNameCard>
                  <VideoChannelTitle isDarkTheme={isDarkTheme}>
                    {channelName}
                  </VideoChannelTitle>
                  <VideoChannelSubscribers isDarkTheme={isDarkTheme}>
                    {subscriberCount} subscribers
                  </VideoChannelSubscribers>
                </VideoChannelNameCard>
              </VideoItemChannel>
              <VideoItemDesc isDarkTheme={isDarkTheme}>
                {description}
              </VideoItemDesc>
            </VideoPlayerItemContainer>
          )

          const getLoadingView = () => {
            const colors = isDarkTheme ? 'white' : 'blue'
            return (
              <div className="loader-container loading" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color={colors}
                  height="50"
                  width="50"
                />
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
                  We are having some trouble to complete your request. Please
                  try again.
                </TrendNrDesc>

                <TrendRetryBtn type="button" onClick={getVideoItemDetails}>
                  Retry
                </TrendRetryBtn>
              </TrendNoResultContainer>
            )
          }

          let ui

          switch (videoPlayerStatus) {
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
}
export default VideoPlayerItem
