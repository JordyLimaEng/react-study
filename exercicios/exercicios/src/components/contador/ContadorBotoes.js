import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import style from '../style'

export default props => {
    return (
        <View style={styleBt.Botoes}> 
            <Button title='+' onPress={props.inc} />
            <Button title='-' onPress={props.dec} />
        </View>
    )
}

const styleBt = StyleSheet.create({
    Botoes: {
        flexDirection: 'row'
    }
})