import React from 'react'
import { Text } from 'react-native'
import style from '../style'
import produtos from './produtos'

export default props => {
    return (
        <>
            <Text style={style.txtG}>Lista de Produtos</Text>
            {produtos.map(prod => {
                // sempre que trabalhar com lista, usar uma key... o react vai usar isso para mapear e alterar precisamente
                return <Text key={prod.id}>({prod.id}) {prod.nome} custa R$ {prod.preco}</Text>
            })}
        </>
    )
}