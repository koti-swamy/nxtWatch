import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {BiListPlus} from 'react-icons/bi'

import './index.css'

import {
  FilterBg,
  FilterTopCard,
  FilterItemCard,
  FilterIcon,
  FilterRouteName,
  FilterBottomCard,
  FilterImageContainer,
  FilterImage,
  FilterMoto,
} from './styledComponents'

import YoutubeContext from '../../YoutubeContext/YoutubeContext'

const Filter = props => {
  const {isHome, isTrending, isGaming, isSavedVideos} = props
  return (
    <YoutubeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FilterBg isDarkTheme={isDarkTheme}>
            <FilterTopCard>
              <FilterItemCard isDarkTheme={isDarkTheme} isTrue={isHome}>
                <Link to="/" className="filter-link-style">
                  <FilterIcon isTrue={isHome} isDarkTheme={isDarkTheme}>
                    <AiFillHome />
                  </FilterIcon>
                  <FilterRouteName isDarkTheme={isDarkTheme}>
                    Home
                  </FilterRouteName>
                </Link>
              </FilterItemCard>
              <FilterItemCard isDarkTheme={isDarkTheme} isTrue={isTrending}>
                <Link to="/trending" className="filter-link-style">
                  <FilterIcon isTrue={isTrending} isDarkTheme={isDarkTheme}>
                    <HiFire />
                  </FilterIcon>
                  <FilterRouteName isDarkTheme={isDarkTheme}>
                    Trending
                  </FilterRouteName>
                </Link>
              </FilterItemCard>
              <FilterItemCard isDarkTheme={isDarkTheme} isTrue={isGaming}>
                <Link to="/gaming" className="filter-link-style">
                  <FilterIcon isTrue={isGaming} isDarkTheme={isDarkTheme}>
                    <SiYoutubegaming />
                  </FilterIcon>
                  <FilterRouteName isDarkTheme={isDarkTheme}>
                    Gaming
                  </FilterRouteName>
                </Link>
              </FilterItemCard>
              <FilterItemCard isDarkTheme={isDarkTheme} isTrue={isSavedVideos}>
                <Link to="/saved-videos" className="filter-link-style">
                  <FilterIcon isTrue={isSavedVideos} isDarkTheme={isDarkTheme}>
                    <BiListPlus />
                  </FilterIcon>
                  <FilterRouteName isDarkTheme={isDarkTheme}>
                    Saved Videos
                  </FilterRouteName>
                </Link>
              </FilterItemCard>
            </FilterTopCard>
            <FilterBottomCard>
              <FilterMoto isDarkTheme={isDarkTheme}>CONTACT US</FilterMoto>
              <FilterImageContainer>
                <FilterImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <FilterImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <FilterImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </FilterImageContainer>
              <FilterMoto isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </FilterMoto>
            </FilterBottomCard>
          </FilterBg>
        )
      }}
    </YoutubeContext.Consumer>
  )
}

export default Filter
