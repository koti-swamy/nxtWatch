import styled from 'styled-components'

export const VideoListContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 20px;
  margin-bottom: 60px;

  @media screen and(max-width:765px) {
    margin-bottom: 20px;
  }
`

export const ItemThumbImg = styled.img`
  margin-bottom: 20px;
  height: 200px;
`

export const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Roboto';
  margin-top: 0px;
`

export const ChannelProfileImg = styled.img`
  height: 25px;
  margin-right: 10px;
`
export const VideoTitleCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelDesc = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 10px;
`
export const ChannelPara = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
  margin-top: 0px;
  margin-bottom: 10px;
`
