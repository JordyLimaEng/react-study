import React from 'react'
import CentralText from '../components/CentralText'

export default props => {
    const route = props.route || {params: {num: 0}}
    return (// We can put params to the screen using navigation.push
        <CentralText backColor='#9932CD'>
            Screen C = {route.params.num} 
        </CentralText>
    )
}