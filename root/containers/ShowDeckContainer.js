import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowDeck from '../presenters/ShowDeck'
import * as Helper from '../utils/helper'
import { updateQuiz } from '../actions/index'


class ShowDeckContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: Helper.titleFromNavigation(navigation)
  })

  componentDidMount() {
    const { fnUpdateQuiz, deckDetail } = this.props
    deckDetail && fnUpdateQuiz({ showScore: false, currentQuestionIndex: null, correct: null, incorrect: null, questionsCount: null, deckTitle: deckDetail.title })
  }

  render() {
    return <ShowDeck {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  const title = Helper.titleFromNavigation(navigation)
  const { decksMeta, quiz } = state
  const { currentQuestionIndex } = quiz
  const deckDetail = decksMeta.decks[title]
  return {
    decksMeta: state.decksMeta,
    deckDetail: deckDetail && state.decksMeta.decks[title]
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
)(ShowDeckContainer)