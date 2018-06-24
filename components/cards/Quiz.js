import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import {
  primary,
  primaryLight,
  white,
  alt,
  altLight,
  secondary,
  secondaryDark,
  secondaryLight,
  altDark,
} from '../../utils/colors'
import { getDeckById } from '../../reducers/decks'
import { answerCorrectly, answerWrongly, resetScore } from '../../actions/card'
import { fetchCardsByDeck } from '../../reducers/cards'
import { getNextObj, computeScore } from '../../utils/helpers'

const mapStateToProps = (state, ownProps) => {
  const deckDetails = getDeckById(state.decks, ownProps.navigation.getParam('deckId', 'NO-ID'))
  return {
    cardDetailList: fetchCardsByDeck(state.cards, deckDetails.cardsList),
    score: computeScore(state.noOfCorrectAnswers, deckDetails.cardsList.length),
    totalQuestions: deckDetails.cardsList.length,
  }
}

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('deckName', 'Your Deck')} Quiz`,
    headerStyle: {
      backgroundColor: primary,
    },
    headerTintColor: white,
    headerTitleStyle: {
      fontWeight: 'bold',
      marginTop: 0,
      marginBottom: 10,
    },
  })

  state = {
    currentQuestion: {},
    questionIndex: 0,
  }

  componentWillMount() {
    const { cardDetailList, resetScore } = this.props
    resetScore()
    this.setState({ currentQuestion: getNextObj(cardDetailList, null), questionIndex: 1 })
  }

  getNextQuestion() {
    const { cardDetailList } = this.props
    this.setState({
      currentQuestion: getNextObj(cardDetailList, this.state.currentQuestion.questionId),
      questionIndex: this.state.questionIndex + 1,
    })
  }
  answerQuestion(isRight) {
    const { answerCorrectly, answerWrongly } = this.props
    isRight ? answerCorrectly() : answerWrongly()
    this.getNextQuestion()
  }

  render() {
    const { currentQuestion, questionIndex } = this.state
    const { score, totalQuestions } = this.props
    return currentQuestion ? (
      <View style={styles.container}>
        <View style={[styles.container, { flex: 2, alignItems: 'center' }]}>
          <Text style={styles.deckSubtitle}>
            Question {questionIndex} of {totalQuestions}
          </Text>
          <Text style={styles.deckTitle}>{JSON.stringify(currentQuestion)}</Text>
        </View>
        <View style={{ flex: 1, padding: 20 }}>
          <TouchableHighlight
            style={[styles.button, styles.danger]}
            underlayColor={altLight}
            onPress={() => this.answerQuestion(false)}
          >
            <Text style={styles.buttonText}>WRONG</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, styles.success]}
            underlayColor={secondaryLight}
            onPress={() => this.answerQuestion(true)}
          >
            <Text style={styles.buttonText}>RIGHT</Text>
          </TouchableHighlight>
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <Text style={[styles.deckTitle, { alignSelf: 'center' }]}>Your Score : {score} %</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  buttonText: {
    fontSize: 20,
    color: white,
    alignSelf: 'center',
  },
  deckTitle: {
    fontSize: 33,
    color: primary,
  },
  deckSubtitle: {
    fontSize: 18,
    color: primaryLight,
  },
  button: {
    height: 56,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
  },
  success: {
    backgroundColor: secondary,
    borderColor: secondaryDark,
  },
  danger: {
    backgroundColor: alt,
    borderColor: altDark,
  },
})

export default connect(
  mapStateToProps,
  { answerCorrectly, answerWrongly, resetScore },
)(Quiz)
