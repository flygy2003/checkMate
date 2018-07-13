import React, {Component} from 'react'
import 
{
  View,
  Text,
  Platform,
  StyleSheet,
  Image
} from 'react-native'

export default class BottomBar extends Component {
  render () {
    return (
      <View  style={styles.container}>
        <View style={styles.left}>
          <Image source={require('../resources/check.png')}/>
        </View>
        <View style={styles.middle}>
          <Image source={require('../resources/plane.png')}/>
        </View>
        <View style={styles.right}>
          <Image source={require('../resources/settings.png')}/>
        </View>
      </View>   
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    color: 'red'
  },
  left: {
    marginRight: '5%',
    marginLeft: '10%',
    height: 10,
    width: 10
  },
  right: {
    marginRight: '5%',
    marginLeft: '5%',
    height: 10,
    width: 10
  },
  middle: {
    marginRight: '10%',
    marginLeft: '5%',
    height: 10,
    width: 10
  }
})