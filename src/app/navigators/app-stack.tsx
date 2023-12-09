import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { PaywallScreen } from '../screens';
import MyTabs from './bottom-tab';
import OnBoardingStack from './on-boarding-stack';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '../utils';

const AppStack: React.FC = () => {
  const [onBoard, setOnBoard] = useState<boolean>(false);

  // const veriGetir = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@first');
  //     if (value !== null) {
  //       setOnBoard(value);
  //       console.log('value', value);
  //     }
  //   } catch (e) {
  //     // Veri okuma hatası
  //   }
  // };

  // useEffect(() => {
  //   veriGetir();
  // }, []);

  const Stack = createStackNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: colors.palette.white }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false,
          }}>
          <Stack.Screen
            name="on-boarding-stack"
            component={OnBoardingStack}
          />
          <Stack.Screen name="paywall-screen" component={PaywallScreen} />
          <Stack.Screen name="bottom-tab" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppStack;
