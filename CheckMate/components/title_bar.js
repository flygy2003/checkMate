import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Image
} from 'react-native'

export default class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plane: 'No AV Selected'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.plane}</Text>
        <Text style={styles.options}>Select Aircraft</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    top: 0,
    borderColor: '#E0E0E0',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    padding: 0,
  },
  title: {
    padding: 10,
    fontSize: 25,
    bottom: 0,
    position: 'absolute',
  },
  options: {
    padding: 10,
    fontSize: 15,
    right: 15,
    bottom: 0,
    position: 'absolute',
    textDecorationLine: 'underline',
    color: 'blue',
    height: '100%',
    textAlignVertical: 'bottom'
  }
})