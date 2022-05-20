import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import style from '../style'
import Numero from './Numero'

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

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
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
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'

                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}