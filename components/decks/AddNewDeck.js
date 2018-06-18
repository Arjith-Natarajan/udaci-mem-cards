import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddNewDeckForm from './AddNewDeckForm'

const mapStateToProps = state => ({
  allDecks: state.decks,
})
class AddNewDeck extends Component {
  componentDidMount() {}
  render() {
    const { allDecks } = this.props
    return (
      <View>
        <Text>{JSON.stringify(allDecks)}</Text>
        <AddNewDeckForm />
      </View>
    )
  }
}

AddNewDeck.propTypes = {
  allDecks: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  null,
)(AddNewDeck)
