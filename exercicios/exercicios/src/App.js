import React from 'react'
import { View } from 'react-native'

import C1 from './components/Primeiro'
import CompOriginal, { Comp1, Comp2 } from './components/Multi'

export default () => (
    //retorna por jsx - sempre precisa do modulo React pra retornar jsx
    //também podemos exportar como arrow function
    <View>
        <C1>
        </C1>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <CompOriginal></CompOriginal>
    </View>

)
