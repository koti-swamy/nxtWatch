import {Component} from 'react'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import {GrFormClose} from 'react-icons/gr'

import {HiSearch} from 'react-icons/hi'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

import Header from '../Header/index'

import Filter from '../FilterComponent/index'

import HomeVideoList from '../HomeVideoList/index'

import {
  HomeBgContainer,
  HomeCard,
  PremiumContainer,
  GetItNowContainer,
  HomeWsLogo,
  GinDescription,
  GetItNowBtn,
  PremiumCloseContainer,
  PremiumCloseBtn,
  GinBtnContainer,
  InputSearchContainer,
  InputSearchEl,
  InputSearchBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    searchText: '',
    onSearchText: '',
    homeStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.setState({homeStatus: apiStatusConstants.loading})
    this.getHomeDetails()
  }

  getHomeDetails = async () => {
    const {onSearchText} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${onSearchText}`

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
        homeStatus: apiStatusConstants.success,
        videosList: convertedData,
      })
    } else {
      this.setState({homeStatus: apiStatusConstants.failure})
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

  onSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  onSearchIcon = () => {
    const {searchText} = this.state
    this.setState({onSearchText: searchText}, this.getHomeDetails)
  }

  render() {
    const {videosList, homeStatus, searchText} = this.state
    console.log(videosList)
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isDarkTheme, isShowPremium, onClosePremium} = value

          return (
            <>
              <Header />
              <HomeBgContainer>
                <Filter isHome />
                <HomeCard data-testid="home" isDarkTheme={isDarkTheme}>
                  <PremiumContainer
                    type="none"
                    data-testid="banner"
                    isShowPremium={isShowPremium}
                  >
                    <GetItNowContainer>
                      <HomeWsLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <GinDescription>
                        Buy Nxt Watch Premium Prepaid plans with UPI
                      </GinDescription>
                      <GinBtnContainer>
                        <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
                      </GinBtnContainer>
                    </GetItNowContainer>
                    <PremiumCloseContainer>
                      <PremiumCloseBtn
                        data-testid="close"
                        type="button"
                        onClick={onClosePremium}
                      >
                        <GrFormClose />
                      </PremiumCloseBtn>
                    </PremiumCloseContainer>
                  </PremiumContainer>
                  <InputSearchContainer>
                    <InputSearchEl
                      value={searchText}
                      type="search"
                      onChange={this.onSearchInput}
                    />
                    <InputSearchBtn
                      onClick={this.onSearchIcon}
                      type="button"
                      isDarkTheme={isDarkTheme}
                      data-testid="searchButton"
                    >
                      <HiSearch />
                    </InputSearchBtn>
                  </InputSearchContainer>
                  <HomeVideoList
                    videosList={videosList}
                    homeStatus={homeStatus}
                    getHomeDetails={this.getHomeDetails}
                  />
                </HomeCard>
              </HomeBgContainer>
            </>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}

export default Home
