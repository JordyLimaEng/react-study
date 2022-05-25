import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';
import StepStack from '../components/StepStack';

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <Stack.Navigator initialRouteName='ScreenA'>
            <Stack.Screen name='ScreenA'
                options={{ title: 'Screen A is now live', headerShown: false }}>
                {props => (
                    <StepStack {...props} advance='ScreenB'>
                        <ScreenA />
                    </StepStack>
                )}
            </Stack.Screen>
            <Stack.Screen name='ScreenB'
                options={{ title: 'Screen B is now live', headerShown: false }}>
                {props => (
                    <StepStack {...props} advance='ScreenC' back>
                        <ScreenB />
                    </StepStack>
                )}
            </Stack.Screen>
            <Stack.Screen name='ScreenC'
                options={{ title: 'Screen C is now live', headerShown: false }}>
                {props => (
                    <StepStack {...props} back>
                        <ScreenB />
                    </StepStack>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}