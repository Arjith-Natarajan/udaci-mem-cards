import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, LayoutAnimation } from 'react-native'
import ActionButton from 'react-native-action-button'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { primary, primaryLight, secondary, secondaryLight, white } from '../../utils/colors'
import { getDecksList } from '../../reducers/decks'

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
      height: 40,
    },
    headerPressColorAndroid: primaryLight,
  }
  state = {
    isActionButtonVisible: true,
  }
  componentDidMount() {}
  _listViewOffset = 0
  _onScroll = (event) => {
    // Simple fade-in / fade-out animation
    const CustomLayoutLinear = {
      duration: 100,
      create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
    }
    // Check if the user is scrolling up or down
    // by confronting the new scroll position with your own one
    const currentOffset = event.nativeEvent.contentOffset.y
    const direction = currentOffset > 0 && currentOffset > this._listViewOffset ? 'down' : 'up'
    // If the user is scrolling down (and the action-button is still visible) hide it
    const isActionButtonVisible = direction === 'up'
    if (isActionButtonVisible !== this.state.isActionButtonVisible) {
      LayoutAnimation.configureNext(CustomLayoutLinear)
      this.setState({ isActionButtonVisible })
    }
    // Update your scroll position
    this._listViewOffset = currentOffset
  }
  render() {
    const { allDecks } = this.props
    const { isActionButtonVisible } = this.state
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FlatList
          data={allDecks}
          renderItem={({ item }) => (
            <View>
              <Text>{item.deckName}</Text>
              <Text>{item.cardsList.length}</Text>
            </View>
          )}
          keyExtractor={item => item.deckId}
          onScroll={this._onScroll}
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
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    alignItems: 'center',
    color: primaryLight,
    fontSize: 25,
    marginTop: 10,
    marginBottom: 20,
    padding: 5,
    textShadowColor: white
  },
})

export default connect(
  mapStateToProps,
  null,
)(ListDecks)