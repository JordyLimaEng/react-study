import React, { Component } from 'react'
import { Button, Text, TextInput } from 'react-native'
import style from '../style'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdeNumero(qtd) {
        this.setState({ qtdNumeros: +qtd })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
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
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={qtd => this.alterarQtdeNumero(qtd)}
                />
                <Button title='Gerar' onPress={this.gerarNumeros}>

                </Button>
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}