import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.back
                ? <Button title='back' onPress={() => {props.navigation.goBack()}}/>
                : false
            }
            {props.advance //Using Push, we can add multiple times a same screen on the stack of screens
                ? <Button title='Advance' onPress={() => {props.navigation.push(props.advance)}}/>
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)