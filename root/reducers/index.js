import { combineReducers } from 'redux'
import decksMeta from './decksMeta'
import quiz from './quiz'

const rootReducer = combineReducers({
  decksMeta,
  quiz
})

export default rootReducer