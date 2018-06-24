import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckDetail extends Component {
  render() {
    const { navigation } = this.props;
    const deckId = navigation.getParam('deckId', 'NO-ID');
    const deckName = navigation.getParam('deckName', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View>
        <Text>{deckName}</Text>
      </View>
    )
  }
}

export default DeckDetail
