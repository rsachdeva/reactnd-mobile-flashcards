import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { orange, gray, white } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'

class NewCard extends Component {
  static propTypes = {
    fnCreateCard: PropTypes.func.isRequired
  }

  state = {
    question: '',
    answer: ''
  }

  handleQuestionChange = (text) => {
    this.setState({question: text})
  }

  handleAnswerChange = (text) => {
    this.setState({answer: text})
  }

  handleReset = () => {
    this.setState({question: "", answer: ""})
  }

  handleSubmit = () => {
    if ((this.state.question.length > 0) && (this.state.answer.length > 0)) {
      const { question, answer } = this.state
      this.handleReset("")
      Keyboard.dismiss()
      const { deckTitle } = this.props
      const { fnCreateCard } = this.props
      fnCreateCard(deckTitle, {question, answer})
      const { navigation } = this.props
      navigation.goBack()
    }
  }

  render() {

    return <KeyboardAvoidingView behavior='padding' style={[commonStyles.container, styles.container]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TextInput name="title" type="text" style={styles.inputTextBox} placeholder='Enter question' value={this.state.question} onChangeText={this.handleQuestionChange}/>
          <TextInput name="title" type="text" style={styles.inputTextBox} placeholder='Enter answer' value={this.state.answer} onChangeText={this.handleAnswerChange}/>
          <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 30,
    color: orange,
    textAlign: 'center',
    margin: 30,
  },
  inputTextBox: {
    margin: 30,
    marginBottom: 10,
    height: 40,
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 5
  },
  submitBtn: {
    marginTop: 10,
    margin: 60,
    padding: 10,
    backgroundColor: gray,
    borderRadius: 7,
  },
  submitBtnText: {
    fontSize: 30,
    color: white,
    textAlign: 'center',
  }
})

export default NewCard