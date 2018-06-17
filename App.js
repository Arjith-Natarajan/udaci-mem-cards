import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
  </View>
)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
})
