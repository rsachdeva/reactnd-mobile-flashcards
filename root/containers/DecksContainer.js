import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  fetchDecks } from '../actions'
import Decks from '../presenters/Decks'

class DecksContainer extends Component {
  componentDidMount() {
    this.props.fnFetchDecks()
  }

  render() {
    return <Decks {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fetchedDecksMeta: state.decksMeta,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fnFetchDecks: () => dispatch(fetchDecks()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksContainer)