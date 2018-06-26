import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Card } from 'react-native-elements'
import { primary, primaryLight, altLight, white } from '../../utils/colors'

class AnimatedCard extends Component {
  componentWillMount() {
    this.animatedHeightValue = new Animated.Value(0)
  }
  componentDidMount() {}
  flashCard() {}
  render() {
    const { question, answer } = this.props.cardDetail
    return (
      <View style={styles.container}>
        <View style={[styles.flashCardFront]}>
          <Card title="Question" containerStyle={[styles.flashCard, styles.question]}>
            <Text style={styles.title}>{question}</Text>
          </Card>
        </View>
        <View style={[styles.flashCardBack]}>
          <Card title="Answer" containerStyle={[styles.flashCard, styles.answer]}>
            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="lightbulb-on-outline" size={65} color={altLight} />
            </View>
            <View style={{ flex: 1, alignSelf: 'center' }}>
              <Text style={styles.title}>{answer}</Text>
            </View>
          </Card>
        </View>

        <TouchableOpacity onPress={() => this.flashCard()}>
          <Text style={styles.subtitle}>show Question</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
    alignItems: 'center',
    borderRadius: 10,
  },
  question: {
    backgroundColor: primaryLight,
  },
  answer: {
    backgroundColor: white,
    padding: 0,
  },
  flashCardBack: {
    position: 'absolute',
    top: 0,
    height: 0,
    width: 300,
  },
  flashCardFront: {
    width: 300,
    height: 350,
  },
})

export default AnimatedCard
