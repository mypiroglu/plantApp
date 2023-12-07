import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from '../components';
import { colors } from '../utils';
import { Icon } from '../components/icon';
import { TestScreen, HomeScreen } from '../screens';
import HomeStack from './home-stack';

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
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: colors.palette.ligtGreen,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 58,
          height: 58,
          borderRadius: 29,
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
    <Tab.Navigator

      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.palette.green,
        tabBarInactiveTintColor: colors.palette.grey,
        tabBarStyle: {
          height: 84,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '400',
          lineHeight: 11.85,
          letterSpacing: -0.24,
          textAlign: 'center',
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
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
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
