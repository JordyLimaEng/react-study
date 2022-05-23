import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <Stack.Navigator initialRouteName='ScreenA'>
            <Stack.Screen name='ScreenA' component={ScreenA} options={{ title: 'Screen A is now live', headerShown: true }} />
            <Stack.Screen name='ScreenB' component={ScreenB} />
            <Stack.Screen name='ScreenC' component={ScreenC} />
        </Stack.Navigator>
    )
}