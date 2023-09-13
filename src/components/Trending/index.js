import {Component} from 'react'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import {HiFire} from 'react-icons/hi'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import Header from '../Header/index'

import Filter from '../FilterComponent/index'

import TrendVideoList from '../TrendVideoList/index'

import {
  TrendContainer,
  TrendCard,
  TrendTopContainer,
  TrendIconContainer,
  TrendHead,
  TrendHeadCard,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendList: [], trendStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.setState({trendStatus: apiStatusConstants.loading})
    this.getTrendDetails()
  }

  getTrendDetails = async () => {
    const apiUrl = `https://apis.ccbp.in/videos/trending`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const convertedData = fetchedData.videos.map(eachItem =>
        this.convertSnakeToPascal(eachItem),
      )

      this.setState({
        trendStatus: apiStatusConstants.success,
        trendList: convertedData,
      })
    } else {
      this.setState({trendStatus: apiStatusConstants.failure})
    }
  }

  convertSnakeToPascal = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    channelName: data.channel.name,
    channelProfileImageUrl: data.channel.profile_image_url,
    viewCount: data.view_count,
    publishedAt: `${formatDistanceToNow(new Date(data.published_at)).slice(
      5,
    )} ago`,
  })

  render() {
    const {trendList, trendStatus} = this.state
    console.log(trendList)
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <TrendContainer>
                <Filter isTrending />
                <TrendCard data-testid="trending" isDarkTheme={isDarkTheme}>
                  <TrendTopContainer isDarkTheme={isDarkTheme} type="none">
                    <TrendIconContainer isDarkTheme={isDarkTheme}>
                      <HiFire />
                    </TrendIconContainer>
                    <TrendHeadCard>
                      <TrendHead isDarkTheme={isDarkTheme}>Trending</TrendHead>
                    </TrendHeadCard>
                  </TrendTopContainer>

                  <TrendVideoList
                    trendList={trendList}
                    trendStatus={trendStatus}
                    getTrendDetails={this.getTrendDetails}
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

export default Trending
