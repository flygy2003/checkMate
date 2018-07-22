import React, {Component} from 'react'
import 
{
  View,
  StyleSheet
} from 'react-native'
import Checklist from '../resources/Checklist'
import Settings from '../resources/Settings'

export default class BottomBar extends Component {
  render () {
    return (
      <View  style={styles.container}>
        <View style={styles.leftbox}>
          <Checklist style={styles.left}/>
        </View>
        <View style={styles.rightbox}>
          <Settings style={styles.right}/>
        </View>
      </View>   
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'blue',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0
  },
  item: {
    color: 'red'
  },
  left: {
    width: 40,
    height: 40,
    flex: 1,
    alignSelf: 'center'
  },
  leftbox: {
    position: 'absolute',
    backgroundColor: '#00C853',
    width: '50%',
    height: '100%',
    left: 0,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  right: {
    width: 50,
    height: 50,
  },
  rightbox: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: '#ff1744',
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
})