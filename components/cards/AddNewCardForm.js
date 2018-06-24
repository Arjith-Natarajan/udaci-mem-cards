import React, { Component } from 'react'
import t from 'tcomb-form-native' // 0.6.9
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { primary, secondaryLight, secondary } from '../../utils/colors'

const { Form } = t.form

const Card = t.struct({
  question: t.String,
  answer: t.String,
})

class AddNewCardForm extends Component {
  onSubmitHandler = () => {
    const value = this.form.getValue()
    this.props.onSubmitForm(value)
  }
  render() {
    return (
      <View style={styles.container}>
        {/* display */}
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
          underlayColor={secondaryLight}
        >
          <Text style={styles.buttonText}>Create</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  labelName: {
    fontSize: 33,
    color: primary,
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
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
    height: 66,
    width: 135,
    backgroundColor: secondary,
    borderColor: secondary,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})

const options = {
  auto: 'placeholders',
  fields: {
    question: {
      // you can use strings or JSX
      label: 'Your Question Goes Here',
      attrs: {
        style: styles.labelName,
      },
    },
    answer: {
      // you can use strings or JSX
      label: 'The Answer..?',
      attrs: {
        style: styles.labelName,
      },
    },
  },
}

export default AddNewCardForm
