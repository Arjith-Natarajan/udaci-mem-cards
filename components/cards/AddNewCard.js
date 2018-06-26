import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createNewCard } from '../../actions/card'
import { primary, white } from '../../utils/colors'
import AddNewCardForm from './AddNewCardForm'

class AddNewCard extends Component {
  static navigationOptions = {
    title: 'New Card',
    headerStyle: {
      backgroundColor: primary,
    },
    headerTintColor: white,
    headerTitleStyle: {
      fontWeight: 'bold',
      marginTop: 0,
      marginBottom: 10,
    },
  }
  componentDidMount() {}
  render() {
    const { onCreateCard, navigation } = this.props
    const deckId = navigation.getParam('deckId', 'NO-ID')
    return (
      <View>
        <AddNewCardForm
          onSubmitForm={(formPayload) => {
            onCreateCard({ ...formPayload, deckId })
            navigation.goBack()
          }}
        />
      </View>
    )
  }
}

AddNewCard.propTypes = {
  onCreateCard: PropTypes.func.isRequired,
}

export default connect(
  null,
  {
    onCreateCard: createNewCard,
  },
)(AddNewCard)
