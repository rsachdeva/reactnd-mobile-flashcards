import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { orange } from '../utils/colors'

AppStatusBar = (props) => {
  return (
    <View style={{ backgroundColor: orange, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={orange} barStyle='light-content'/>
    </View>
  )
}

export default AppStatusBar