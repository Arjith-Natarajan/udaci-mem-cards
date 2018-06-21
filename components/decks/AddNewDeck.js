import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createNewDeck } from '../../actions/deck'
import AddNewDeckForm from './AddNewDeckForm'

class AddNewDeck extends Component {
  componentDidMount() {}
  render() {
    const { onCreateDeck, navigation } = this.props
    return (
      <View>
        <AddNewDeckForm
          onSubmitForm={(deckName) => {
            onCreateDeck(deckName)
            navigation.popToTop()
          }}
        />
      </View>
    )
  }
}

AddNewDeck.propTypes = {
  onCreateDeck: PropTypes.func.isRequired,
}

export default connect(
  null,
  {
    onCreateDeck: createNewDeck,
  },
)(AddNewDeck)
