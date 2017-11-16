import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCard } from '../actions/index'
import NewCard from '../controlledForms/NewCard'

class NewCreateCardsContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card'
  })

  render() {
    return <NewCard {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  return {
    deckTitle: navigation.state.params.title
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fnCreateCard: (deckTitle, newCard) => dispatch(createCard(deckTitle, newCard))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCreateCardsContainer)