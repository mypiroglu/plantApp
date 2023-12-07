import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {TestScreen} from '../screens';
import MyTabs from './bottom-tab';
import AsyncStorage from '@react-native-community/async-storage';

import {colors} from '../utils/colors';

const AppStack: React.FC = () => {
  const [onBoard, setOnBoard] = useState<boolean>(false);

  const veriGetir = async () => {
    try {
      const value = await AsyncStorage.getItem('@first');
      if (value !== null) {
        setOnBoard(value);
        console.log('value', value);
      }
    } catch (e) {
      // Veri okuma hatası
    }
  };

  useEffect(() => {
    veriGetir();
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          headerShown: false,
        }}>
        <Stack.Screen name="test-screen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
