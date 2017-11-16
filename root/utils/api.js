import { AsyncStorage } from 'react-native'
import * as Helper from '../utils/helper'

const DOCUMENT_NAME = "DRInnovations:US:DECKS"

export const saveDeckTitle = (title) => {
  const value = JSON.stringify({
    [title]: Helper.buildNewDeck(title)
  })
  return AsyncStorage.mergeItem(DOCUMENT_NAME, value)
}

export const getDecks = () => {
  return AsyncStorage.getItem(DOCUMENT_NAME)
}


export const getDeck = (title) => {
  return getDecks().then((results) => {
    return (results && JSON.parse(results)[title])
  })
}

export const addCardToDeck = (deckTitle, card) => {
  return getDeck(deckTitle).then((currentDeck) => {
    const value = JSON.stringify({
      [deckTitle]: Helper.buildDeckWithNewCard(currentDeck, card)
    })
    return AsyncStorage.mergeItem(DOCUMENT_NAME, value)
  })
}

export const clearAllDecks = () => {
  return AsyncStorage.removeItem(DOCUMENT_NAME)
}

//RUN TEST code to test api only at load time of the app

// getDecks().then((results) => {
//   const decks = JSON.parse(results)
//   console.log("getDecks jmd ", decks)
// })


// getDeck("Jaan").then((result) => {
//   console.log("getDeck Jaan ", result)
// })

// addCardToDeck("Jaan", {question: "Where is God?", answer: "In Our heart"}).then(() => {
//   getDecks().then((results) => {
//     const decks = JSON.parse(results)
//     console.log("getDecks Jaan jmd ", decks)
//   })
// })
//
// addCardToDeck("Jaan", {question: "You love me?", answer: "YES"}).then(() => {
//   getDecks().then((results) => {
//     const decks = JSON.parse(results)
//     console.log("getDecks jmd ", decks)
//   })
// })

// clearAllDecks().then(() => {
//   console.log("all clear")
// })



