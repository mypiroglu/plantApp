import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="diagnose-screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profile-screen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
