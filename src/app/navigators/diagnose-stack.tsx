import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiagnoseScreen } from '../screens';

const Stack = createNativeStackNavigator();

const DiagnoseStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="diagnose-screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="diagnose-screen" component={DiagnoseScreen} />
    </Stack.Navigator>
  );
};

export default DiagnoseStack;
