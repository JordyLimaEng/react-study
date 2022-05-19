import React from 'react'
import { View, StyleSheet } from 'react-native'

// import C1 from './components/Primeiro'
// import CompOriginal, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'

export default () => (
    //retorna por jsx - sempre precisa do modulo React pra retornar jsx
    //também podemos exportar como arrow function
    <View style={style.App}>
        {/* <C1/>
        <Comp1/>
        <Comp2/>
        <CompOriginal/> */}
        {/* <MinMax n1={3} n2={20}/>
        <MinMax n1={15} n2={30}/> 
        <Titulo principal="Cadastro"
                secundario="Tela de Cadastro do Produto"
        <Botao/> 
        <Contador initial={100} step={30}/>
        <Contador />
        <Pai/>
        />*/}
        <ContadorV2/>
   </View>

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