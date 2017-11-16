import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { orange, lightGray, gray, white } from '../utils/colors'
import { commonStyles } from '../utils/commonStyles'


const renderItem = (item, navigation) => {
  return <TouchableOpacity
    onPress={() => navigation.navigate(
      'ShowDeck',
      {title: item.title}
    )}>
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.count}>{item.questions.length} cards</Text>
    </View>
  </TouchableOpacity>
}

const Decks = (props) => {
  const { fetchedDecksMeta, navigation } = props
  const { isFetchingDecks, decks } = fetchedDecksMeta
  const values = Object.values(decks)
  return (
    (isFetchingDecks ? (<View style={styles.noDecksContainer}>
      <Text style={styles.noDecksText}>Loading..</Text>
    </View>) : (values && (values.length > 0)) ?
      (<View style={[commonStyles.container, styles.container]}>
        <FlatList data={values}
                  renderItem={({item}) => renderItem(item, navigation)}
                  keyExtractor={(item, index) => item.title}/>
      </View>) :
      (<View style={styles.noDecksContainer}>
        <Text style={styles.noDecksText}>No Decks Yet Created</Text>
      </View>))
  )
}

const styles = StyleSheet.create({
  container: {
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightGray,
    paddingTop: 20
  },
  text: {
    fontSize: 30,
    color: gray
  },
  count: {
    fontSize: 15,
    color: gray
  },
  noDecksContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noDecksText: {
    fontSize: 30,
    color: orange,
    textAlign: 'center',
    margin: 30,
  },
})

Decks.propTypes = {
  decks: PropTypes.array
}

export default Decks