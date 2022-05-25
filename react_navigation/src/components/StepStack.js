import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {props.back
                ? <Button title='back' onPress={() => { props.navigation.goBack() }} />
                : false
            }
            {props.advance //With Push, We can add multiple times a same screen on the stack of screens
                ? <Button title='Advance' onPress={() => {
                    props.navigation.push(
                        props.advance,
                        {
                            num: parseInt(Math.random() * 100)
                        })
                }} />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)