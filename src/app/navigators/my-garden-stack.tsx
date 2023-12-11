import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyGardenScreen } from '../screens';

const Stack = createNativeStackNavigator();

const MyGardenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="diagnose-screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="my-garden-screen" component={MyGardenScreen} />
    </Stack.Navigator>
  );
};

export default MyGardenStack;
