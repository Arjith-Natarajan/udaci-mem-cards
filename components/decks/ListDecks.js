import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, FlatList, StyleSheet, LayoutAnimation } from 'react-native'
import ActionButton from 'react-native-action-button'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons' // eslint-disable-line import/no-extraneous-dependencies
import { connect } from 'react-redux'
import { primary, primaryLight, secondary, secondaryLight, white } from '../../utils/colors'
import { getDecksList } from '../../reducers/decks'
import { AssistiveImage } from '../../utils/assetsManager'
import DeckPreview from './DeckPreview'

const mapStateToProps = state => ({
  allDecks: getDecksList(state.decks),
})

const Title = ({ ...props }) => (
  <View {...props}>
    <Text style={styles.headerTitleStyle}>
      <MaterialCommunityIcons name="cards-outline" size={30} /> UdaciCards
    </Text>
  </View>
)

class ListDecks extends Component {
  static navigationOptions = {
    headerTitle: <Title />,
    headerStyle: {
      backgroundColor: primary,
    },
  }
  state = {
    isActionButtonVisible: true,
  }
  componentDidMount() {}
  onScroll = (event) => {
    const CustomLayoutLinear = {
      duration: 100,
      create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
    }
    const currentOffset = event.nativeEvent.contentOffset.y
    const direction = currentOffset > 0 && currentOffset > this.listViewOffset ? 'down' : 'up'
    const isActionButtonVisible = direction === 'up'
    if (isActionButtonVisible !== this.state.isActionButtonVisible) {
      LayoutAnimation.configureNext(CustomLayoutLinear)
      this.setState({ isActionButtonVisible })
    }
    this.listViewOffset = currentOffset
  }
  onPressCard = ({ deckId, deckName }) => {
    this.props.navigation.navigate('DeckDetailScreen', { deckId, deckName })
  }
  listViewOffset = 0

  NoDecks = () => (
    <View style={styles.container}>
      <Text style={styles.title}>No Decks to Show,</Text>
      <Text style={styles.subtitle}>Add Some to get started</Text>
      <Image source={AssistiveImage} style={styles.assistiveImage} />
    </View>
  )

  render() {
    const { allDecks } = this.props
    const { isActionButtonVisible } = this.state
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={allDecks}
          renderItem={({ item }) => <DeckPreview item={item} onPressCard={this.onPressCard} />}
          keyExtractor={item => item.deckId}
          onScroll={this.onScroll}
          ListEmptyComponent={this.NoDecks}
        />
        {isActionButtonVisible && (
          <ActionButton
            buttonColor={secondary}
            onPress={() => {
              this.props.navigation.navigate('AddDeck')
            }}
            style={styles.fab}
            degrees={0}
            fixNativeFeedbackRadius
            nativeFeedbackRippleColor={secondaryLight}
          >
            <FontAwesome name="plus" size={30} color={white} />
          </ActionButton>
        )}
      </View>
    )
  }
}

ListDecks.propTypes = {
  navigation: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  allDecks: PropTypes.arrayOf(PropTypes.shape({
    deckId: PropTypes.string.isRequired,
    deckName: PropTypes.string.isRequired,
    cardsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  assistiveImage: {
    width: 200,
    height: 200,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    color: primary,
  },
  subtitle: {
    fontSize: 22,
    color: primaryLight,
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    alignItems: 'center',
    color: white,
    fontSize: 25,
    marginTop: 10,
    marginBottom: 20,
    padding: 5,
    textShadowColor: primaryLight,
  },
})

export default connect(
  mapStateToProps,
  null,
)(ListDecks)
