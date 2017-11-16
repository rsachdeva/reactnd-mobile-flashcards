import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowCard from '../presenters/ShowCard'
import { updateQuiz } from '../actions/index'

class ShowCardContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz',
      headerBackTitle: null
  }}

  buildQuiz = (props) => {
    const { questionsCount, currentQuestionIndex, correct, incorrect, deckTitle } = props
    return {
      showAnswer: false,
      showQuizScore: false,
      currentQuestionIndex: currentQuestionIndex,
      questionsCount: questionsCount,
      correct: correct ,
      incorrect: incorrect,
      deckTitle: deckTitle
    }
  }

  render() {
    return <ShowCard {...this.props} fnBuildQuiz={this.buildQuiz}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  const { title } = navigation.state.params
  const { decks } = state.decksMeta
  const deck = decks[title]
  const questions = deck.questions
  const questionsCount = questions.length
  const { quiz } = state
  const { currentQuestionIndex, correct, incorrect, showScore, showAnswer } = quiz
  return {
    card: questions[currentQuestionIndex],
    questionsCount: questionsCount,
    deckTitle: title,
    currentQuestionIndex: currentQuestionIndex,
    correct: correct,
    incorrect: incorrect,
    showScore: showScore,
    showAnswer: showAnswer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fnUpdateQuiz: (quiz) => dispatch(updateQuiz(quiz))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCardContainer)