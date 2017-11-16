import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'
import { lightGray, gray, lightRed, white } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'
import * as QuizNotification from '../utils/quizNotification'


const handleRestartQuiz = (props) => {
  const { fnUpdateQuiz, deckTitle } = props
  const resetQuiz = { showScore: false, questionsCount: 0, currentQuestionIndex: 0, correct: 0, incorrect: 0 , deckTitle: deckTitle }
  fnUpdateQuiz(resetQuiz)
}

const navigateBackToDeck = (props) => {
  const { navigation } = props
  navigation.goBack()
}

const handleResetNotification = () => {
  QuizNotification.removeKeyAndClearLocalNotification()
    .then(QuizNotification.checkKeyAndSetLocalNotification)
}

const ShowQuizScore = (props) => {
  handleResetNotification()
  const { correct, incorrect, deckTitle } = props
  const total = deckTitle && (correct + incorrect)
  return (
    total ? <View style={[commonStyles.container, styles.container]}>
      <Text style={styles.text}>{correct} correct and {incorrect} incorrect answers for Deck {deckTitle} that had {total} card{total > 1 ? 's' : ''}.</Text>
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => handleRestartQuiz(props)}>
          <Text style={[styles.btnText]}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigateBackToDeck(props)}>
          <Text style={styles.btnText}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    </View> : <View><Text style={styles.btnText}>Calculating score...</Text></View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: gray,
    textAlign: 'center',
    margin: 10,
  },
  textQuestionNumber: {
    fontSize: 20,
    color: gray,
    textAlign: 'center',
    margin: 10,
  },
  textAnswer: {
    fontSize: 20,
    color: lightRed,
    textAlign: 'center',
    margin: 10,
  },
  count: {
    fontSize: 30,
    color: lightGray
  },
  btnsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  btn: {
    marginBottom: 30,
    padding: 10,
    borderRadius: 7,
    backgroundColor: gray
  },
  btnText: {
    fontSize: 30,
    color: white,
    textAlign: 'center',
  }
})

ShowQuizScore.propTypes = {
  correct: PropTypes.number,
  incorrect: PropTypes.number,
  deckTitle: PropTypes.string,
  fnUpdateQuiz: PropTypes.func.isRequired
}

export default ShowQuizScore