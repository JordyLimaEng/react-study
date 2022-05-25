import React from 'react'
import CentralText from '../components/CentralText'

export default props => {
    const num =
        props.route
            && props.route.params
            && props.route.params.num ? props.route.params.num : 0
    return (// We can put params to the screen using navigation.push
        <CentralText backColor='#9932CD'>
            Screen C = {num}
        </CentralText>
    )
}