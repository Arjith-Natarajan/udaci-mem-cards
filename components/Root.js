import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import AddNewDeckForm from './decks/AddNewDeckForm'

class Root extends Component {
  state = {
    data: 'something',
  }
  componentDidMount() {}

  async storeItem(key, item) {
    try {
      const jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item))
      return jsonOfItem
    } catch (error) {
      console.log(error.message)
    }
    return undefined
  }

  async retrieveItem(key) {
    try {
      const retrievedItem = await AsyncStorage.getItem(key)
      const item = JSON.parse(retrievedItem)
      return item
    } catch (error) {
      console.log(error.message)
    }
    return undefined
  }

  render() {
    const { data } = this.state
    return (
      <View>
        <AddNewDeckForm onSubmitForm={deckName => this.setValue(deckName)} />
        <Text>{data}</Text>
      </View>
    )
  }
}

// const styles = {
//   text: {
//     fontSize: 30,
//     color: '#f010fe',
//   },
// }

export default Root
