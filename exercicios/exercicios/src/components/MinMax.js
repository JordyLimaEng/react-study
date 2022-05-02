import React from "react";
import { Text } from "react-native"
import Style from "./style";

export default (props) => {
    return (
        <Text style = {Style.txtG}>
            O valor {props.n1 > props.n2 ? props.n1: props.n2} é maior que o valor {props.n1 < props.n2 ? props.n1: props.n2}
        </Text>
    )

}
