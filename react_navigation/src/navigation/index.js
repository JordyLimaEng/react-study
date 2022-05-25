import React from "react";
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native'
import Stack from "./Stack";
import Tab from "./Tab";

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            <Tab />
        </NavigationContainer>
    </SafeAreaView>
)