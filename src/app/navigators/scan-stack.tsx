import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScanScreen } from '../screens';

const Stack = createNativeStackNavigator();

const ScanStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="scan-screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="scan-screen" component={ScanScreen} />
    </Stack.Navigator>
  );
};

export default ScanStack;
