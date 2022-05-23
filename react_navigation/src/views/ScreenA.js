import React from 'react'
import CentralText from '../components/CentralText'

export default props => {
    props.navigation.navigate('ScreenB')
    return (
        <CentralText backColor='#e53935'>
            Screen A
        </CentralText>
    )
}