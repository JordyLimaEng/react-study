import React from 'react'
import { View, StyleSheet } from 'react-native'

import C1 from './components/Primeiro'
import CompOriginal, { Comp1, Comp2 } from './components/Multi'

export default () => (
    //retorna por jsx - sempre precisa do modulo React pra retornar jsx
    //também podemos exportar como arrow function
    <View style={style.App}>
        <C1>
        </C1>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <CompOriginal></CompOriginal>
    </View>

)

const style = StyleSheet.create({
    App: {
        // em react-native o eixo principal é o Y
        flexGrow: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})