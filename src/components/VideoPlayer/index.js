import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import Header from '../Header'

import Filter from '../FilterComponent/index'

import VideoPlayerItem from '../VideoPlayerItem/index'

import {TrendContainer, TrendCard} from './StyledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoPlayer extends Component {
  state = {videoPlayerStatus: apiStatusConstants.initial, videoItem: {}}

  componentDidMount() {
    this.setState({videoPlayerStatus: apiStatusConstants.loading})
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const convertedData = this.convertSnakeToPascal(fetchedData.video_details)
      this.setState({
        videoItem: convertedData,
        videoPlayerStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({videoPlayerStatus: apiStatusConstants.failure})
    }
  }

  convertSnakeToPascal = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    channelName: data.channel.name,
    channelProfileImageUrl: data.channel.profile_image_url,
    subscriberCount: data.channel.subscriber_count,
    viewCount: data.view_count,
    publishedAt: `${formatDistanceToNow(new Date(data.published_at)).slice(
      5,
    )} ago`,
    description: data.description,
  })

  render() {
    const {videoItem, videoPlayerStatus} = this.state

    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <TrendContainer>
                <Filter />
                <TrendCard
                  data-testid="videoItemDetails"
                  isDarkTheme={isDarkTheme}
                >
                  <VideoPlayerItem
                    videoItem={videoItem}
                    videoPlayerStatus={videoPlayerStatus}
                    getVideoItemDetails={this.getVideoItemDetails}
                    key={videoItem.publishedAt}
                  />
                </TrendCard>
              </TrendContainer>
            </>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}

export default VideoPlayer
