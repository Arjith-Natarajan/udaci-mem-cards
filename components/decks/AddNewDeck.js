import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createNewDeck } from '../../actions/deck'
import AddNewDeckForm from './AddNewDeckForm'

const mapStateToProps = state => ({
  allDecks: state.decks,
})

class AddNewDeck extends Component {
  componentDidMount() {}
  render() {
    const { allDecks, onCreateDeck } = this.props
    return (
      <View>
        <Text>{JSON.stringify(allDecks)}</Text>
        <AddNewDeckForm onSubmitForm={deckName => onCreateDeck(deckName)} />
      </View>
    )
  }
}

AddNewDeck.propTypes = {
  allDecks: PropTypes.object.isRequired,
  onCreateDeck: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  {
    onCreateDeck: createNewDeck,
  },
)(AddNewDeck)
