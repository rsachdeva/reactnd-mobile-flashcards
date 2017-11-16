import * as ACTION_TYPES from './types'
import * as DeckStorageAPI from '../utils/api'

const requestCreateDeck = () => {
  return {
    type: ACTION_TYPES.REQUEST_CREATE_DECK
  }
}

const receivedCreateDeck = (title) => {
  return {
    type: ACTION_TYPES.RECEIVE_CREATE_DECK,
    title
  }
}

export const createDeck = (title) => (dispatch, getState) => {
  dispatch(requestCreateDeck())
  DeckStorageAPI.saveDeckTitle(title).then(() => {
    dispatch(receivedCreateDeck(title))
  })
}

const requestCreateCard = () => {
  return {
    type: ACTION_TYPES.REQUEST_CREATE_CARD
  }
}

const receivedCreateCard = (deckTitle, card) => {
  return {
    type: ACTION_TYPES.RECEIVE_CREATE_CARD,
    deckTitle,
    card
  }
}

export const createCard = (deckTitle, card) => (dispatch, getState) => {
  dispatch(requestCreateCard())
  DeckStorageAPI.addCardToDeck(deckTitle, card).then(() => {
    dispatch(receivedCreateCard(deckTitle, card))
  })
}


const requestDecks = () => {
  return {
    type: ACTION_TYPES.REQUEST_DECKS
  }
}

const receiveDecks = (decks) => {
  return {
    type: ACTION_TYPES.RECEIVE_DECKS,
    decks
  }
}

export const fetchDecks = () => (dispatch, getState) => {
  dispatch(requestDecks())
  DeckStorageAPI.getDecks().then((results) => {
    const decks = JSON.parse(results)
    dispatch(receiveDecks(decks))
  })
}

export const updateQuiz = (quiz) => {
  return {
    type: ACTION_TYPES.UPDATE_QUIZ,
    quiz
  }
}