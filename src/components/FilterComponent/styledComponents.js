import styled from 'styled-components'

export const FilterBg = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
  background-size: cover;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  font-family: 'Roboto';
  @media screen and (max-width: 765px) {
    display: none;
  }
`

export const FilterTopCard = styled.div`
  display: flex;
  flex-direction: column;
`
export const FilterItemCard = styled.div`
  background-color: ${props => {
    let value
    if (props.isDarkTheme === true && props.isTrue === true) {
      value = '#383838'
    } else if (props.isDarkTheme === false && props.isTrue === true) {
      value = '#e2e8f0'
    }
    return value
  }};
  cursor: pointer;
`

export const FilterIcon = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  color: ${props => props.isTrue && '#ff0000'};
  margin-right: 10px;
  margin-left: 20px;
`
export const FilterRouteName = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  font-size: 15px;
  font-weight: bold;
`
export const FilterBottomCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilterImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 10px;
`
export const FilterImage = styled.img`
  height: 25px;
  margin-right: 10px;
`
export const FilterMoto = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
`
