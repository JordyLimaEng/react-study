import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import style from '../style'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    alterarQtdeNumero(qtd) {
        this.setState({ qtdNumeros: qtd })
    }

    render() {
        return (
            <>
                <Text style={style.txtG}>
                    Gerador de Mega Sena {this.state.qtdNumeros}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder='Qtde de numeros'
                    value={this.state.qtdNumeros}
                    onChangeText={qtd => this.alterarQtdeNumero(qtd)}
                />
            </>
        )
    }
}