import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';
import StepStack from '../components/StepStack';
import { TabActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default props => {
    return (// tabBarOption is deprecated, we can use screenOptions instead
        <Tab.Navigator screenOptions={{ 
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            tabBarStyle: { fontSize: 30,  },
            headerShown : false,
        }} initialRouteName='ScreenB'>
            <Tab.Screen name="ScreenA" component={ScreenA} />
            <Tab.Screen name="ScreenB" component={ScreenB} />
            <Tab.Screen name="ScreenC" component={ScreenC} />
        </Tab.Navigator>
    )
}