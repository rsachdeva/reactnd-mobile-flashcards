import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createDeck } from '../actions/index'
import NewDeck from '../controlledForms/NewDeck'

class NewCreateDecksContainer extends Component {

  render() {
    return <NewDeck {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fnCreateDeck: (title) => dispatch(createDeck(title))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCreateDecksContainer)