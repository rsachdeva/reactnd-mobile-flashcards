import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { lightGray, gray, green, red, lightRed, white } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'
import ShowQuizScore from "./ShowQuizScore"
import ShowQuestionOrAnswer from './ShowQuestionOrAnswer'



const handleCorrect = (props) => {
  const { fnUpdateQuiz, fnBuildQuiz,  questionsCount, currentQuestionIndex, correct } = props
  const quiz = fnBuildQuiz(props)
  if (questionsCount === currentQuestionIndex + 1) {
    fnUpdateQuiz({
      ...quiz,
      correct: correct + 1,
      showScore: true
    })
  } else {
    fnUpdateQuiz({
      ...quiz,
      currentQuestionIndex: currentQuestionIndex + 1,
      correct: correct + 1
    })
  }
}

const handleInCorrect = (props) => {
  const { fnUpdateQuiz, fnBuildQuiz, questionsCount, currentQuestionIndex, incorrect } = props
  const quiz = fnBuildQuiz(props)
  if (questionsCount === currentQuestionIndex + 1) {
    fnUpdateQuiz({
      ...quiz,
      incorrect: incorrect + 1,
      showScore: true
    })
  } else {
    fnUpdateQuiz({
      ...quiz,
      currentQuestionIndex: currentQuestionIndex + 1,
      incorrect: incorrect + 1
    })
  }
}

const ShowCard = (props) => {
  const { showScore, card, questionsCount, currentQuestionIndex } = props
  return (
    showScore ? <ShowQuizScore {...props}/> : (card ? <View style={[commonStyles.container, styles.container]}>
      <Text style={[styles.textQuestionNumber, {alignSelf: 'flex-start'}]}>{currentQuestionIndex + 1}/{questionsCount}</Text>
      <ShowQuestionOrAnswer {...props}/>
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: green}]} onPress={() => handleCorrect(props)}>
          <Text style={[styles.btnText]}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: lightRed}]} onPress={() => handleInCorrect(props)}>
          <Text style={styles.btnText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View> : <View><Text style={styles.btnText}>Loading card...</Text></View>)
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  btnText: {
    fontSize: 30,
    color: white,
    textAlign: 'center',
  }
})

ShowCard.propTypes = {
  showScore: PropTypes.bool,
  card: PropTypes.object,
  questionsCount: PropTypes.number,
  currentQuestionIndex: PropTypes.number,
  fnUpdateQuiz: PropTypes.func.isRequired,
  fnBuildQuiz: PropTypes.func.isRequired
}

export default ShowCard