import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from '../components';
import { colors, sizing } from '../utils';
import { Icon } from '../components/icon';
import { TestScreen, HomeScreen } from '../screens';
import HomeStack from './home-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  onPress,
}) => (
  <TouchableOpacity
    style={{
      top: sizing.height < 700 ? -35 : -35,
      justifyContent: 'center',
      alignItems: 'center',

    }}
    onPress={onPress}>
    <View
      style={{
        width: sizing.height < 700 ? 64 : 84,
        height: sizing.height < 700 ? 64 : 84,
        borderRadius: sizing.height < 700 ? 32 : 42,
        backgroundColor: colors.palette.ligtGreen,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: sizing.height < 700 ? 54 : 74,
          height: sizing.height < 700 ? 54 : 74,
          borderRadius: sizing.height < 700 ? 27 : 37,
          backgroundColor: colors.palette.green,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon icon="scan" />
      </View>
    </View>
  </TouchableOpacity>
);



const PlusScreen: React.FC = () => {
  return <View>{/* Plus screen content */}</View>;
};

const MyTabs: React.FC = () => {
  return (

    <View style={{ flex: 1, backgroundColor: "red" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <Tab.Navigator

          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.palette.green,
            tabBarInactiveTintColor: colors.palette.grey,
            tabBarStyle: {
              height: 100,
              bottom: -30,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 11.85,
              letterSpacing: -0.24,
              top: sizing.height < 700 ? -40 : 0,
            },
            tabBarIconStyle: {
              top: sizing.height < 700 ? -20 : 0,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Icon icon={focused ? 'shome' : 'uhome'} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Diagnose"
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Icon icon={focused ? 'sdiagnose' : 'udiagnose'} />
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Plus"
            component={PlusScreen}
            options={{
              tabBarButton: props => <CustomTabBarButton {...props} />,
            }}
          />
          <Tab.Screen
            name="My Garden"
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Icon icon={focused ? 'sgarden' : 'ugarden'} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={HomeStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Icon icon={focused ? 'sprofile' : 'uprofile'} />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </View >

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 11.85,
    letterSpacing: -0.24,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyTabs;
