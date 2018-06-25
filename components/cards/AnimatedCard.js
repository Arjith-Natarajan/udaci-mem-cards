import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { primary, primaryLight } from '../../utils/colors'

class AnimatedCard extends Component {
  componentDidMount() {}
  render() {
    const { question, answer } = this.props.cardDetail
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{question}</Text>
        <Text style={styles.subtitle}>show Answer</Text>
        <Text style={styles.title}>{answer}</Text>
        <Text style={styles.subtitle}>show Question</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 33,
    color: primary,
  },
  subtitle: {
    fontSize: 18,
    color: primaryLight,
  },
})

export default AnimatedCard
