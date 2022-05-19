import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default ({ num = 0 }) => {

    return (
        <View>
            <Text style={style.txtG}>O resultador é:</Text>
            {num % 2 === 0
                ? <Text style={style.txtG}>Par</Text>
                : <Text style={style.txtG}>Impar</Text>
            }
        </View>
    )


}