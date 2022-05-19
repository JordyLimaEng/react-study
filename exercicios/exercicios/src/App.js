import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'

export default () => (
    //retorna por jsx - sempre precisa do modulo React pra retornar jsx
    //também podemos exportar como arrow function
    <SafeAreaView style={style.App}>
        <Familia>
            <Membro nome='Bia' sobrenome='Arruda'/>
            <Membro nome='Bernardo' sobrenome='Arruda'/>
        </Familia>
        <Familia>
            <Membro nome='Ana' sobrenome='Silva'/>
            <Membro nome='Arnaldo' sobrenome='Silva'/>
            <Membro nome='Gui' sobrenome='Silva'/>            
            <Membro nome='Rebeca' sobrenome='Silva'/>
        </Familia>
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