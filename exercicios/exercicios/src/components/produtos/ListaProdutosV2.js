import React from 'react'
import { FlatList, Text } from 'react-native'
import style from '../style'
import produtos from './produtos'

export default props => {
    return (
        <>
            <Text style={style.txtG}>ListaProdutosV2</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({item : p}) => {
                    return <Text>{p.id}) {p.nome}</Text>
                }}
            />
            
        </>
    )
}