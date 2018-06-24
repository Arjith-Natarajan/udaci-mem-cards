import React, { Component } from 'react'
import t from 'tcomb-form-native' // 0.6.9
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const { Form } = t.form

const Card = t.struct({
  question: t.String,
  answer: t.String,
})

const options = {}

class AddNewCardForm extends Component {
  onSubmitHandler = () => {
    const value = this.form.getValue()
    this.props.onSubmitForm(value)
  }
  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Text style={styles.title}>Your New Card</Text>
        <Form
          ref={(c) => {
            this.form = c
          }}
          type={Card}
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

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // marginTop: 50,
    // padding: 20,
    // backgroundColor: '#ffffff',
  },
  title: {
    // fontSize: 30,
    // alignSelf: 'center',
    // marginBottom: 30,
  },
  buttonText: {
    // fontSize: 18,
    // color: 'white',
    // alignSelf: 'center',
  },
  button: {
    // height: 36,
    // backgroundColor: '#48BBEC',
    // borderColor: '#48BBEC',
    // borderWidth: 1,
    // borderRadius: 8,
    // marginBottom: 10,
    // alignSelf: 'stretch',
    // justifyContent: 'center',
  },
})

export default AddNewCardForm
