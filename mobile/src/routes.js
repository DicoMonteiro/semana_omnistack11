import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail  from './pages/Details';

export default function Routes() {
    return (
        <NavigationContainer>
            {/* Usado o headerShown para retirar como titulo da page */}
            <AppStack.Navigator screenOptions={{  headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}