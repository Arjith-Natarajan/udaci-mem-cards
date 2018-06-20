import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'

class Root extends Component {
  state = {
    name: '',
  }
  componentDidMount() {
    // AsyncStorage.getItem('name').then(value => this.setState({ name: value }))
    // console.log('set item success')
    setInterval(async () => {
      console.log('Inside setInterval')
      const data = await AsyncStorage.getAllKeys()
      console.log('inside the getAllKeys')
      data.forEach(async (k) => {
        const value = await AsyncStorage.getItem(k)
        console.group(k)
        console.log(value)
        console.groupEnd()
      })
    }, 3000)
  }

  setName = (value) => {
    AsyncStorage.setItem('name', value)
    this.setState({ name: value })
  }

  _setAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('@name', 'I like to save it')
    } catch (error) {
      // Error saving data
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} autoCapitalize="none" onChangeText={this.setName} />
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  textInput: {
    margin: 15,
    height: 35,
    borderWidth: 1,
    backgroundColor: '#7685ed',
  },
})
