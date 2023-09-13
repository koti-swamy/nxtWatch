import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import YoutubeContext from './YoutubeContext/YoutubeContext'

import LoginForm from './components/LoginForm/index'

import Home from './components/Home/index'

import Trending from './components/Trending/index'

import Gaming from './components/Gaming/index'

import VideoPlayer from './components/VideoPlayer/index'

import SavedVideos from './components/SavedVideos/index'

import ProtectedRoute from './components/ProtectedRoute/index'

import NotFound from './components/NotFound/index'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    isShowPremium: true,
    savedList: [],
  }

  onTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClosePremium = () => {
    this.setState({isShowPremium: false})
  }

  onSave = product => {
    const {savedList} = this.state
    const booleanValue = savedList.every(eachItem => eachItem.id !== product.id)
    console.log(booleanValue)
    if (booleanValue) {
      this.setState(prevState => ({
        savedList: [...prevState.savedList, product],
      }))
    } else {
      this.setState(prevState => ({
        savedList: prevState.savedList.filter(
          eachItem => eachItem.id !== product.id,
        ),
      }))
    }
  }

  render() {
    const {isDarkTheme, savedList, isShowPremium} = this.state
    console.log(savedList)
    return (
      <YoutubeContext.Provider
        value={{
          isDarkTheme,
          onTheme: this.onTheme,
          onClosePremium: this.onClosePremium,
          isShowPremium,
          onSave: this.onSave,
          savedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />

          <ProtectedRoute exact path="/" component={Home} />

          <ProtectedRoute exact path="/trending" component={Trending} />

          <ProtectedRoute exact path="/gaming" component={Gaming} />

          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />

          <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />

          <ProtectedRoute component={NotFound} />
        </Switch>
      </YoutubeContext.Provider>
    )
  }
}

export default App
