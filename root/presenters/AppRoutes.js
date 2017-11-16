import { StackNavigator, TabNavigator } from 'react-navigation'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { orange, white, gray } from '../utils/colors'
import DecksContainer from "../containers/DecksContainer"
import NewCreateDecksContainer from '../containers/NewCreateDecksContainer'
import ShowDeckContainer from "../containers/ShowDeckContainer"
import NewCreateCardsContainer from "../containers/NewCreateCardsContainer"
import ShowCardContainer from "../containers/ShowCardContainer"

const DecksStartStackNavigator = StackNavigator({
  Decks: {
    screen: DecksContainer,
    navigationOptions: {
      header: null
    },
  },
  ShowDeck: {
    screen: ShowDeckContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange
      },
      tabBarVisible: false
    }
  },
  NewCard: {
    screen: NewCreateCardsContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange
      },
      tabBarVisible: false
    }
  },
  ShowCard: {
    screen: ShowCardContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange
      },
      tabBarVisible: false
    }
  }
})

const AppRoutes = TabNavigator({
  Decks: {
    screen: DecksStartStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <Entypo name='list' size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewCreateDecksContainer,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => <Entypo name='plus' size={30} color={tintColor}/>
    }
  },
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: orange,
  }
})

export default AppRoutes