import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import DigiteSeuNome from './components/DigiteSeuNome'
import FlexboxV3 from './components/FlexboxV3'


export default () => (
    //retorna por jsx - sempre precisa do modulo React pra retornar jsx
    //também podemos exportar como arrow function
    <SafeAreaView style={style.App}>
        <FlexboxV3/>
    </SafeAreaView>

)

const style = StyleSheet.create({
    App: {
        // em react-native o eixo principal é o Y
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})