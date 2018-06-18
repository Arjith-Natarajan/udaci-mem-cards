import React from 'react'
import { View, Text } from 'react-native'
import AddNewDeck from './decks/AddNewDeck'

const Root = () => (
  <View>
    <Text style={styles.text}>Hello World</Text>
    <AddNewDeck />
  </View>
)

const styles = {
  text: {
    fontSize: 30,
    color: '#f010fe',
  },
}

export default Root
