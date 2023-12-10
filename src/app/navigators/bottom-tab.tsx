import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, sizing } from '../utils';
import { Icon } from '../components/icon';
import HomeStack from './home-stack';
import ScanStack from './scan-stack';

const Tab = createBottomTabNavigator();

interface CustomTabBarButtonProps {
  onPress: () => void;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={styles.touchableOpacityContainer} onPress={onPress}>
    <View style={styles.biggerCircle}>
      <View style={styles.smallerCircle}>
        <Icon icon="scan" />
      </View>
    </View>
  </TouchableOpacity>
);


const MyTabs: React.FC = () => {
  return (
    <View style={styles.tabContainer}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.palette.green,
          tabBarInactiveTintColor: colors.palette.grey,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLaberStyle,
          tabBarIconStyle: styles.tabBarIconStyle,
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
          name="Scan"
          component={ScanStack}
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
    </View>
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
  touchableOpacityContainer: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  biggerCircle: {
    width: sizing.height < 700 ? 64 : 74,
    height: sizing.height < 700 ? 64 : 74,
    borderRadius: sizing.height < 700 ? 32 : 37,
    backgroundColor: colors.palette.ligtGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallerCircle: {
    width: sizing.height < 700 ? 54 : 64,
    height: sizing.height < 700 ? 54 : 64,
    borderRadius: sizing.height < 700 ? 27 : 32,
    backgroundColor: colors.palette.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    height: sizing.height,
    backgroundColor: colors.palette.offWhite,
  },
  tabBarStyle: {
    position: 'absolute',
    zIndex: 999,
  },
  tabBarLaberStyle: {
    fontSize: sizing.height < 700 ? 10 : 12,
    fontWeight: '400',
    lineHeight: sizing.height < 700 ? 11.85 : 14.82,
    letterSpacing: -0.24,
    textAlign: 'center',
  },
  tabBarIconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyTabs;
