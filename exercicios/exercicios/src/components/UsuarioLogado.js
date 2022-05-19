import React from 'react'
import { Text } from 'react-native'
import If from './if'
import style from './style'

export default props => {
    const usuario = props.usuario || {}

    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={style.txtG}>Usuário Logado:</Text>
                <Text style={style.txtM}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>

    )
}