import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
  return (
    <View style={style.FlexV3}>
      <Quadrado cor='#F00' lado={20} />
      <Quadrado cor='#0F0' lado={30} />
      <Quadrado cor='#00F' lado={40} />
      <Quadrado cor='#F0F' lado={50} />
      <Quadrado cor='#0FF' lado={60} />
    </View>
  )
}

const style = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',//define a linha como eixo principal
    justifyContent: 'space-around',
    alignItems: 'stretch', 
    height: 300,
    width: '100%',
    backgroundColor: '#000'
  }
})