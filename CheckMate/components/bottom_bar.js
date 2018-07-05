import React, {Component} from 'react';
import 
{
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native'

export default class BottomBar extends Component {
  render () {
    return (
      <View  style={styles.container}>
        <Text style={styles.item}>I exist inside the bar</Text>
      </View>   
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',
    height: 80,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    color: 'red'
  }
});