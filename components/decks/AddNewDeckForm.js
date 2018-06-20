import React, { Component } from 'react'
import PropTypes from 'prop-types'
import t from 'tcomb-form-native' // 0.6.9
import { Alert, StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const { Form } = t.form

const Deck = t.struct({
  deckName: t.String,
})

const options = {}

class AddNewDeckForm extends Component {
  onSubmitHandler = () => {
    const value = this.form.getValue()
    Alert.alert(JSON.stringify(value))
    this.props.onSubmitForm(value)
  }
  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Text style={styles.title}>Your New Deck</Text>
        <Form
          ref={(c) => {
            this.form = c
          }}
          type={Deck}
          options={options}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onSubmitHandler}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Create</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

AddNewDeckForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
})

export default AddNewDeckForm
