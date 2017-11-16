import {
  UPDATE_QUIZ
} from '../actions/types'


const initial = {
  deckTitle: '',
  currentQuestionIndex: 0,
  questionsCount: 0,
  correct: 0,
  incorrect: 0,
  showScore: false,
  showAnswer: false
}

export const quiz = (quizState = initial, action) => {
  switch (action.type) {
    case UPDATE_QUIZ:
      return {
        ...quizState,
        ...action.quiz
      }
    default:
      return quiz
  }
}

export default quiz