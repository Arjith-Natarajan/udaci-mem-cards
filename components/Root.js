import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import AddNewDeckForm from './decks/AddNewDeckForm'

class Root extends Component {
  state = {
    data: '',
  }
  componentDidMount() {
    try {
      const value = AsyncStorage.getItem('@MySuperStore:key')
      if (value !== null) {
        console.log(value)
        this.updateState(value)
      }
    } catch (error) {
      console.error(error)
    }
  }
  setValue = (newValue) => {
    try {
      AsyncStorage.setItem('@MySuperStore:key', newValue)
    } catch (error) {
      // Error saving data
    }
  }
  updateState = (newData) => {
    this.setState({ data: newData })
  }
  render() {
    const { data } = this.state
    return (
      <View>
        <Text style={styles.text}>{data}</Text>
        <AddNewDeckForm onSubmitForm={deckName => this.setValue(deckName)} />
      </View>
    )
  }
}


const styles = {
  text: {
    fontSize: 30,
    color: '#f010fe',
  },
}

export default Root
