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

const mapStateToProps = (state, ownProps) => ({
  cardsIdList: getDeckById(state.decks, ownProps.navigation.getParam('deckId', 'NO-ID')).cardsList,
})

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

  render() {
    const { cardsIdList } = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.container, { flex: 2, alignSelf: 'center' }]}>
          <Text style={styles.deckTitle}>{JSON.stringify(cardsIdList)}</Text>
        </View>
        <View style={{ flex: 1, padding: 20 }}>
          <TouchableHighlight style={[styles.button, styles.danger]} underlayColor={altLight}>
            <Text style={styles.buttonText}>WRONG</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.button, styles.success]} underlayColor={altLight}>
            <Text style={styles.buttonText}>RIGHT</Text>
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
  null,
)(Quiz)
