import React, { Fragment } from "react";
import { View, Text} from 'react-native';
import style from "./style";

export default props => {

    return (
        <Fragment> {/*para envolver o componente com fragment, 
                    pode usar somente '<>' e '</>' 
                    e assim exclui a necessidade de importar Fragment*/}
            <Text style={style.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
    )
}