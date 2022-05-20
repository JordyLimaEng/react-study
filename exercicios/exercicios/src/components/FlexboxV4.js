import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0}></View>
      <View style={style.V1}></View>
      <View style={style.V2}></View>
    </View>
  )
}

const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000'
  },
  V0: {
    backgroundColor: '#DAF',
    height: 300
  },
  V1: {
    backgroundColor: '#F0F',
    flexGrow: 2
  },
  V2: {
    backgroundColor: '#0F0',
    flexGrow: 5
  }
})