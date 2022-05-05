import React from "react";
import { Button } from "react-native";

export default props => {

    function executar() {
        console.warn("Executou #1")
    }

    return (
        <>
        <Button title = "Execute #1" onPress={executar}/>
        <Button title = "Execute #2" onPress={function() {
            console.warn("Executou #2")
        }}/>
        <Button
            title="Execute #3"
            onPress={() => console.warn('Executou #3')}
        />
        </>
    )
}