import styled from 'styled-components'

export const VideoPlayerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
`

export const VideoItemTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-weight: bold;
`
export const VideoViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
  font-weight: bold;
  align-items: center;
  @media screen and (max-width: 796px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const VideoItemPara = styled.p`
  font-size: 15px;
`

export const VideoLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoItemLike = styled.button`
  font-size: 15px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 796px) {
    margin-right: 20px;
  }
`

export const VideoItemDislike = styled.button`
  font-size: 15px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 796px) {
    margin-right: 20px;
  }
`

export const VideoItemSave = styled(VideoItemDislike)`
  color: ${props => (props.isSave ? '#2563eb' : '#64748b')};
`
export const Horizontal = styled.hr`
  width: 100%;
  border-color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
`

export const VideoItemChannel = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`

export const VideoChannelLogo = styled.img`
  height: 50px;
  margin-right: 10px;
`
export const VideoChannelNameCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`

export const VideoChannelTitle = styled.p`
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-weight: bold;
`
export const VideoChannelSubscribers = styled.p`
  font-size: 15px;
  margin-top: 5px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
  font-weight: bold;
`
export const VideoItemDesc = styled.p`
  font-size: 15px;
  margin-left: 60px;
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-weight: bold;
  @media screen and (max-width: 796px) {
    margin-left: 0px;
  }
`
export const TrendNoResultContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendNoResultImg = styled.img`
  height: 300px;
  @media screen and(max-width:765px) {
    height: 100px;
  }
`
export const TrendNrHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? 'White' : 'Black')};
`
export const TrendNrDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#00306e')};
  font-size: 15px;
`

export const TrendRetryBtn = styled.button`
  background-color: #4f46e5;
  border: 0px;
  color: white;
  height: 28px;
  width: 62px;
  align-items: center;
`
