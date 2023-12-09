import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (

    <Stack.Navigator
      initialRouteName="home-screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home-screen" component={HomeScreen} />
    </Stack.Navigator>

  );
};



export default HomeStack;
