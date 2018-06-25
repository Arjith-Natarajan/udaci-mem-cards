import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { primaryDark } from '../utils/colors'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'
import AddNewDeck from './decks/AddNewDeck'
import AddNewCard from './cards/AddNewCard'
import AnimatedCard from './cards/AnimatedCard'
import ListDecks from './decks/ListDecks'
import DeckDetail from './decks/DeckDetail'
import Quiz from './cards/Quiz'

class Root extends Component {
  componentDidMount() {
    setLocalNotification()
    // clearLocalNotification()
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <AppStatusBar backgroundColor={primaryDark} />
        {/* <RootView /> */}
        <AnimatedCard
          cardDetail={{
            questionId: 'c1',
            question: 'What is this?',
            answer: 'Nothing',
          }}
        />
      </View>
    )
  }
}

const AppStatusBar = (backgroundColor, ...props) => (
  <View style={{ ...backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={primaryDark} {...props} />
  </View>
)

const RootView = createStackNavigator(
  {
    Home: ListDecks,
    AddDeck: AddNewDeck,
    DeckDetailScreen: DeckDetail,
    AddCard: AddNewCard,
    TakeQuiz: Quiz,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  },
)

export default Root
