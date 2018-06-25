import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Card } from 'react-native-elements'
import { primary, primaryLight, altLight, white } from '../../utils/colors'

class AnimatedCard extends Component {
  componentDidMount() {}
  render() {
    const { question, answer } = this.props.cardDetail
    return (
      <View style={styles.container}>
        <Card title="Question" containerStyle={[styles.flashCard]}>
          <Text style={styles.title}>{question}</Text>
        </Card>
        <Card title="Answer" containerStyle={[styles.flashCard, styles.flashCardBack]}>
          <View style={{ alignSelf: 'center' }}>
            <MaterialCommunityIcons name="lightbulb-on-outline" size={65} color={altLight} />
          </View>
          <Text style={styles.title}>{answer}</Text>
        </Card>
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
    fontSize: 28,
    color: primary,
  },
  subtitle: {
    fontSize: 18,
    color: primaryLight,
  },
  flashCard: {
    flex: 1,
    // alignSelf: 'stretch',
    alignItems: 'center',
    height: 500,
    width: 300,
    borderRadius: 10,
    margin: 30,
    backgroundColor: primaryLight,
    backfaceVisibility: 'hidden',
  },
  flashCardBack: {
    backgroundColor: white,
    position: 'absolute',
    top: 0,
    height: 0,
    alignSelf: 'center',
  },
})

export default AnimatedCard
