import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { primaryDark } from '../utils/colors'
import AddNewDeck from './decks/AddNewDeck'
import ListDecks from './decks/ListDecks'

const Root = () => (
  <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
    <AppStatusBar backgroundColor={primaryDark} />
    <RootView />
  </View>
)

const AppStatusBar = (backgroundColor, ...props) => (
  <View style={{ ...backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={primaryDark} {...props} />
  </View>
)

const RootView = createStackNavigator(
  {
    Home: ListDecks,
    AddDeck: AddNewDeck,
  },
  {
    initialRouteName: 'Home',
  },
)

export default Root
