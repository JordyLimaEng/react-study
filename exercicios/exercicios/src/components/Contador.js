import React, { useState } from "react";
import { Text, Button } from 'react-native';
import style from "./style";

export default props => {
    const [numero, setNumero] = useState(props.initial); 

    const inc = () => setNumero(numero + props.step);
    const dec = () => setNumero(numero - props.step);

    return (
        <>
            <Text style = {style.txtG}>{numero}</Text>
            <Button title = '+' onPress={inc}/>
            <Button title = '-' onPress={dec}/>
        </>
    )
}