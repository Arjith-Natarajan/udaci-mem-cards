/* eslint no-shadow: 0 */ //
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import * as c from '../../utils/colors'
import { getDeckById } from '../../reducers/decks'
import { answerCorrectly, answerWrongly, resetScore } from '../../actions/card'
import { fetchCardsByDeck } from '../../reducers/cards'
import { getNextObj, computeScore } from '../../utils/helpers'
import AnimatedCard from './AnimatedCard'

const mapStateToProps = (state, ownProps) => {
  const deckDetails = getDeckById(state.decks, ownProps.navigation.getParam('deckId', 'NO-ID'))
  return {
    cardDetailList: fetchCardsByDeck(state.cards, deckDetails.cardsList),
    score: state.noOfCorrectAnswers,
    totalQuestions: deckDetails.cardsList.length,
  }
}

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('deckName', 'Your Deck')} Quiz`,
    headerStyle: {
      backgroundColor: c.primary,
    },
    headerTintColor: c.white,
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
    isRight ? answerCorrectly() : answerWrongly() // eslint-disable-line no-unused-expressions
    this.getNextQuestion()
  }

  retakeQuiz() {
    const { cardDetailList, resetScore } = this.props
    resetScore()
    this.setState({ currentQuestion: getNextObj(cardDetailList, null), questionIndex: 1 })
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
          <AnimatedCard
            answerQuestion={(flag) => {
              this.answerQuestion(flag)
            }}
            question={currentQuestion.question}
            answer={currentQuestion.answer}
          />
        </View>
      </View>
    ) : (
      <View style={[styles.container, { alignItems: 'center' }]}>
        <View style={[styles.container, { flex: 2, alignItems: 'center' }]}>
          <Text style={styles.deckTitle}>Your Score : {computeScore(score, totalQuestions)}</Text>
          <Text style={styles.deckSubtitle}> Total Question : {totalQuestions} </Text>
          <Text style={styles.deckSubtitle}> Answered Correctly : {score} </Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableHighlight
            style={[styles.button, styles.primary]}
            underlayColor={c.primaryLight}
            onPress={() => this.retakeQuiz()}
          >
            <Text style={styles.buttonPrimary}>ReStart Quiz</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, styles.primary]}
            underlayColor={c.primaryLight}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.buttonPrimary}>Back To Deck</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

Quiz.propTypes = {
  cardDetailList: PropTypes.objectOf(PropTypes.shape({
    questionId: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
  answerCorrectly: PropTypes.func.isRequired,
  answerWrongly: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  buttonText: {
    fontSize: 20,
    color: c.white,
    alignSelf: 'center',
  },
  buttonPrimary: {
    fontSize: 20,
    color: c.primary,
    alignSelf: 'center',
  },
  deckTitle: {
    fontSize: 33,
    color: c.primary,
  },
  deckSubtitle: {
    fontSize: 18,
    color: c.primaryLight,
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
  primary: {
    borderColor: c.primaryDark,
  },
})

export default connect(
  mapStateToProps,
  { answerCorrectly, answerWrongly, resetScore },
)(Quiz)
