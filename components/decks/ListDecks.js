import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecksList } from '../../reducers/decks'

const mapStateToProps = state => ({
  allDecks: getDecksList(state.decks),
})

class ListDecks extends Component {
  componentDidMount() {}
  render() {
    const { allDecks } = this.props
    return (
      <FlatList
        data={allDecks}
        renderItem={({ item }) => (
          <View>
            <Text>{item.deckName}</Text>
            <Text>{item.cardsList.length}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.deckId}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  null,
)(ListDecks)
