export const buildDeckWithNewCard = (currentDeck, newCard) => {
  return { title: currentDeck.title, questions: currentDeck.questions.concat({question: newCard.question, answer: newCard.answer}) }
}

export const buildNewDeck = (title) => {
  return { title, questions: [] }
}

export const titleFromNavigation = (navigation) => {
  //console.log("navigation.state is ", navigation.state)
  return navigation.state.params.title
}