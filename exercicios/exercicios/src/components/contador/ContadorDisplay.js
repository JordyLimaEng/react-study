import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import style from '../style'

export default props => {
    return (
        <View style={styleDisplay.Display}>
            <Text style={[style.txtM, styleDisplay.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const styleDisplay = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 10,
        width: 200,
    },
    DisplayText: {
        color: '#FFF',
        textAlign: 'center'
    }
})