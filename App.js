import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './root/reducers'
import AppStatusBar from './root/presenters/AppStatusBar'
import AppRoutes from './root/presenters/AppRoutes'
import * as QuizNotification from './root/utils/quizNotification'


const middleware = [ thunk ]
const composeEnhancers = compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default class App extends React.Component {

  componentDidMount() {
    QuizNotification.checkKeyAndSetLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar/>
          <AppRoutes />
        </View>
      </Provider>
    )
  }
}
