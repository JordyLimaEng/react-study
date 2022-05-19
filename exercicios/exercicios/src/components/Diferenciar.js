import React from 'react'
import { Text, Platform } from 'react-native'
import style from './style'

export default props => {

    switch (Platform.OS) {
        case 'android':
            return <Text style={style.txtM}>Android</Text>
        case 'ios':
            return <Text style={style.txtM}>iOS</Text>
        default:
            return <Text style={style.txtM}>WTF!!</Text>
    }
}