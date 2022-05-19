import React from 'react'
import { Text } from 'react-native'
import style from '../style'
import Filho from './Membro'

export default props => {
    return (
        <>
        <Text style={style.txtG}>Familia: {}</Text>
            {props.children}
        </>
    )
}