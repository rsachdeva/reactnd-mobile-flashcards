import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { gray, lightRed } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'

const flipSide = (props) => {
  const { fnUpdateQuiz, fnBuildQuiz, showAnswer } = props
  const quiz = fnBuildQuiz(props)
  fnUpdateQuiz({
    ...quiz,
    showAnswer: !showAnswer
  })
}

const isTextVeryLong = (text) => text.length > 30

const ShowQuestionOrAnswer = (props) => {
  const { showAnswer, card } = props
  return (
    showAnswer ? (<View style={[commonStyles.container, styles.container]}>
      <Text style={[styles.text, {color: lightRed}]}>{card.answer}</Text>
      <TouchableOpacity onPress={() => flipSide(props)}>
        <Text style={[styles.textLabel, {color: gray}]}>Show Question</Text>
      </TouchableOpacity></View>) : (<View style={[commonStyles.container, styles.container]}>
      <Text style={[styles.text, (isTextVeryLong(card.question) ? { fontSize: 30 } : { fontSize: 45 })]}>{card.question}</Text>
      <TouchableOpacity onPress={() => flipSide(props)}>
        <Text style={styles.textLabel}>Show Answer</Text>
      </TouchableOpacity></View>)
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 45,
    color: gray,
    textAlign: 'center',
    margin: 10,
  },
  textLabel: {
    fontSize: 20,
    color: lightRed,
    textAlign: 'center',
    margin: 10,
  }
})

ShowQuestionOrAnswer.propTypes = {
  card: PropTypes.object.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  fnUpdateQuiz: PropTypes.func.isRequired,
  fnBuildQuiz: PropTypes.func.isRequired
}

export default ShowQuestionOrAnswer
