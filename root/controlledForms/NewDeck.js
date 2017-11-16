import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { orange, gray, white } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'

class NewDeck extends Component {
  static propTypes = {
    fnCreateDeck: PropTypes.func.isRequired
  }

  state = {
    title: ''
  }

  handleTitleChange = (text) => {
    this.setState({title: text})
  }

  handleSubmit = () => {
    if (this.state.title.length > 0) {
      const currentTitle = this.state.title
      this.handleTitleChange("")
      Keyboard.dismiss()
      const { fnCreateDeck } = this.props
      const trimmedTitle = currentTitle.trim()
      fnCreateDeck(trimmedTitle)
      const { navigation } = this.props
      navigation.navigate('ShowDeck', {title: trimmedTitle})
    }
  }

  render() {

    return <KeyboardAvoidingView behavior='padding' style={[commonStyles.container, styles.container]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.questionText}>What is the title of your new deck?</Text>
          <TextInput name="title" type="text" style={styles.title} placeholder='Deck Title' value={this.state.title} onChangeText={this.handleTitleChange}/>
          <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
            <Text style={styles.submitBtnText}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  questionText: {
    fontSize: 30,
    color: orange,
    textAlign: 'center',
    margin: 30,
  },
  title: {
    marginTop: 0,
    margin: 30,
    height: 40,
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 5
  },
  submitBtn: {
    marginTop: 0,
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

export default NewDeck