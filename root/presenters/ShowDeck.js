import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { lightGray, gray, white } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'


const handleNewCard = (props, deckDetail) => {
  const { navigation } = props
  navigation.navigate('NewCard', {title: deckDetail.title})
}

const startQuiz = (props, deckDetail) => {
  if (deckDetail.questions.length > 0) {
    const { fnUpdateQuiz, navigation } = props
    const quiz = { showAnswer: false, showScore: false, currentQuestionIndex: 0, questionscount: 0, correct: 0, incorrect: 0 , deckTitle: deckDetail.title }
    fnUpdateQuiz(quiz)
    navigation.navigate('ShowCard', {title: deckDetail.title})
  }
}

const ShowDeck = (props) => {
  const { decksMeta, deckDetail } = props
  const { isCreatingDeck } = decksMeta

  return (
    (isCreatingDeck ? (<View style={styles.noDecksContainer}>
      <Text style={styles.noDecksText}>Creating..</Text>
      </View>) : (<View style={[commonStyles.container, styles.container]}>
      <Text style={styles.text}>{deckDetail.title}</Text>
      <Text style={styles.count}>{deckDetail.questions.length} cards</Text>
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: white, borderWidth: 1}]} onPress={() => handleNewCard(props, deckDetail)}>
          <Text style={[styles.btnText, {color: gray}]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {marginTop: 10, marginBottom: 30}]} onPress={() => startQuiz(props, deckDetail)}>
          <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>))
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 45,
    color: gray,
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
    alignItems: 'center'
  },
  btn: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: gray,
    borderRadius: 7,
  },
  btnText: {
    fontSize: 30,
    color: white,
    textAlign: 'center',
  }
})

ShowDeck.propTypes = {
  deckDetail: PropTypes.object
}


export default ShowDeck