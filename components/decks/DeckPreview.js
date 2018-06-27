import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { calculateTimeAgo } from '../../utils/helpers'
import { DeckGenericBackGround } from '../../utils/assetsManager'

const DeckPreview = ({ item, onPressCard }) => (
  <View>
    <TouchableOpacity onPress={() => onPressCard(item)}>
      <Card
        title={item.deckName}
        featuredTitle={`${item.cardsList.length} Cards`}
        image={DeckGenericBackGround}
        featuredSubtitle={`last studied ${calculateTimeAgo(item.lastStudied)}`}
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'stretch',
        }}
        containerStyle={{
          borderRadius: 10,
        }}
      />
    </TouchableOpacity>
  </View>
)

DeckPreview.propTypes = {
  item: PropTypes.shape({
    deckId: PropTypes.string.isRequired,
    deckName: PropTypes.string.isRequired,
    cardsList: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastStudied: PropTypes.object,
  }).isRequired,
  onPressCard: PropTypes.func.isRequired,
}

export default DeckPreview
