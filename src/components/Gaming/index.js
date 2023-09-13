import {Component} from 'react'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import Header from '../Header/index'

import Filter from '../FilterComponent/index'

import GamingList from '../GamingList/index'

import {
  TrendContainer,
  TrendCard,
  TrendTopContainer,
  TrendIconContainer,
  TrendHeadCard,
  TrendHead,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingList: [], gamingStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.setState({gamingStatus: apiStatusConstants.loading})
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    const apiUrl = `https://apis.ccbp.in/videos/gaming`

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
        gamingStatus: apiStatusConstants.success,
        gamingList: convertedData,
      })
    } else {
      this.setState({gamingStatus: apiStatusConstants.failure})
    }
  }

  convertSnakeToPascal = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: `${data.view_count} Watching Worldwide`,
  })

  render() {
    const {gamingList, gamingStatus} = this.state
    console.log(gamingList)
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <TrendContainer>
                <Filter isGaming />
                <TrendCard data-testid="gaming" isDarkTheme={isDarkTheme}>
                  <TrendTopContainer isDarkTheme={isDarkTheme} type="none">
                    <TrendIconContainer isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming />
                    </TrendIconContainer>
                    <TrendHeadCard>
                      <TrendHead isDarkTheme={isDarkTheme}>Gaming</TrendHead>
                    </TrendHeadCard>
                  </TrendTopContainer>
                  <GamingList
                    gamingList={gamingList}
                    gamingStatus={gamingStatus}
                    getGamingDetails={this.getGamingDetails}
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

export default Gaming
