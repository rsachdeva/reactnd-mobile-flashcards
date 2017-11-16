import {
  REQUEST_CREATE_DECK,
  RECEIVE_CREATE_DECK,
  REQUEST_DECKS,
  RECEIVE_DECKS,
  REQUEST_CREATE_CARD,
  RECEIVE_CREATE_CARD
} from '../actions/types'
import * as Helper from '../utils/helper'

const initial = {
  isCreatingDeck: false,
  isCreatingCard: false,
  isFetchingDecks: false,
  decks: {}
}

const decksMeta = (decksMetaState = initial, action) => {
  switch (action.type) {
    case REQUEST_CREATE_DECK:
      return {
        ...decksMetaState,
        isCreatingDeck: true
      }
    case RECEIVE_CREATE_DECK:
      return {
        ...decksMetaState,
        isCreatingDeck: false,
        decks: {
          ...decksMetaState.decks,
          [action.title]: Helper.buildNewDeck(action.title)
        }
      }
    case REQUEST_DECKS:
      return {
        ...decksMetaState,
        isFetchingDecks: true
      }
    case RECEIVE_DECKS:
      return {
        ...decksMetaState,
        isFetchingDecks: false,
        decks: {
          ...decksMetaState.decks,
          ...action.decks
        }
      }
    case REQUEST_CREATE_CARD:
      return {
        ...decksMetaState,
        isCreatingCard: true
      }
    case RECEIVE_CREATE_CARD:
      const currentDeck = decksMetaState.decks[action.deckTitle]
      return  {
        ...decksMetaState,
        isCreatingCard: false,
        decks: {
          ...decksMetaState.decks,
          [action.deckTitle]: Helper.buildDeckWithNewCard(currentDeck, action.card)
        }
      }
    default:
      return decksMetaState
  }
}

export default decksMeta