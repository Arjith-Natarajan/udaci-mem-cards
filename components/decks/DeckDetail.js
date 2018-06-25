import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { primary, primaryLight, white, alt, altLight } from '../../utils/colors'
import {clearLocalNotification, setLocalNotification} from '../../utils/helpers'
import { getDeckById } from '../../reducers/decks'
import { attendQuiz } from '../../actions/deck'

const mapStateToProps = (state, ownProps) => ({
  deck: getDeckById(state.decks, ownProps.navigation.getParam('deckId', 'NO-ID')),
})

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('deckName', 'Your Deck'),
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
  onPressAddCard = (deckId) => {
    this.props.navigation.navigate('AddCard', { deckId })
  }
  onPressTakeQuiz = (deckId, deckName) => {
    this.props.attendQuiz(deckId)
    clearLocalNotification().then(setLocalNotification)
    this.props.navigation.navigate('TakeQuiz', { deckId, deckName })
  }
  render() {
    const { deck } = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.container, { flex: 2 }]}>
          <Text style={styles.deckTitle}>{deck.deckName}</Text>
          <Text style={styles.deckSubtitle}>{deck.cardsList.length} Cards</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableHighlight
            style={styles.button}
            underlayColor={altLight}
            onPress={() => this.onPressTakeQuiz(deck.deckId, deck.deckName)}
          >
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor={altLight}
            onPress={() => this.onPressAddCard(deck.deckId)}
          >
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableHighlight>
        </View>
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
  buttonText: {
    fontSize: 18,
    color: alt,
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
    height: 46,
    borderColor: alt,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})

export default connect(
  mapStateToProps,
  { attendQuiz },
)(DeckDetail)
