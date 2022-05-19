import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import style from './style'

export default props => {
    const [nome, setNome] = useState('Teste')

    return (
        <View style={style.txtM}>
            <Text>{nome}</Text>
            {/* componente controlado */}
            <TextInput
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
            {/* componente nao controlado */}
            <TextInput
                placeholder='Digite seu nome'
                value={null}
            />
        </View>
    )
}