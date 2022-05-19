import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import UsuarioLogado from './components/UsuarioLogado'


export default () => (
    //retorna por jsx - sempre precisa do modulo React pra retornar jsx
    //também podemos exportar como arrow function
    <SafeAreaView style={style.App}>
        <ListaProdutosV2/>
    </SafeAreaView>

)

const style = StyleSheet.create({
    App: {
        // em react-native o eixo principal é o Y
        flexGrow: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})