import React from 'react'
import { Text } from 'react-native'
import style from '../style'

import Filho from './Filho'

export default props => {
   let x = 13;
   let y = 100;

    return(
      <>
        <Filho a={x} b={y}></Filho>
        <Filho a={x+15} b={y-25}></Filho>
      </>
   )
}