import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Card } from 'react-native-elements'
import { primary, primaryLight, altLight, white } from '../../utils/colors'

const fixedMaxHeightCard = 300
class AnimatedCard extends Component {
  componentWillMount() {
    this.animatedHeightValue = new Animated.Value(0)
  }
  componentDidMount() {}

  flashCard() {
    Animated.stagger(300, [
      Animated.timing(this.animatedHeightValue, {
        toValue: fixedMaxHeightCard,
        duration: 500,
      }),
    ]).start()
  }
  unflashCard() {
    Animated.stagger(300, [
      Animated.timing(this.animatedHeightValue, {
        toValue: 0,
        duration: 500,
      }),
    ]).start()
  }
  render() {
    const { question, answer } = this.props
    const animatedHeightStyle = {
      height: this.animatedHeightValue,
    }
    return (
      <View style={styles.container}>
        <View style={[styles.flashCardFront]}>
          <Card title="Question" containerStyle={[styles.flashCard, styles.question]}>
            <Text style={styles.title}>{question}</Text>
            <TouchableOpacity onPress={() => this.flashCard()}>
              <Text style={styles.subtitle}>show Answer</Text>
            </TouchableOpacity>
          </Card>
        </View>
        <Animated.View style={[styles.flashCardBack, animatedHeightStyle]}>
          <Card title="Answer" containerStyle={[styles.flashCard, styles.answer]}>
            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="lightbulb-on-outline" size={65} color={altLight} />
            </View>
            <View style={{ flex: 1, alignSelf: 'center' }}>
              <Text style={styles.title}>{answer}</Text>
            </View>
            <TouchableOpacity onPress={() => this.unflashCard()}>
              <Text style={styles.subtitle}>show Question</Text>
            </TouchableOpacity>
          </Card>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
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
    // backgroundColor: primaryLight,
  },
  answer: {
    backgroundColor: white,
    padding: 0,
    alignSelf: 'stretch',
  },
  flashCardBack: {
    position: 'absolute',
    top: 0,
    // width: 300,
  },
  flashCardFront: {
    // width: 300,
    height: fixedMaxHeightCard,
  },
})

export default AnimatedCard
