import React, { useState } from "react";
import { Text, Button } from 'react-native';
import style from "./style";

export default ({initial = 100, step = 1}) => {
    const [numero, setNumero] = useState(initial); 

    const inc = () => setNumero(numero + step);
    const dec = () => setNumero(numero - step);

    return (
        <>
            <Text style = {style.txtG}>{numero}</Text>
            <Button title = '+' onPress={inc}/>
            <Button title = '-' onPress={dec}/>
        </>
    )
}