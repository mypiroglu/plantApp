import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from '../components';
import {colors} from '../utils';

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
        }}>
        {children}
      </View>
    </View>
  </TouchableOpacity>
);

const HomeScreen: React.FC = () => {
  return <View>{/* Home screen content */}</View>;
};

const PlusScreen: React.FC = () => {
  return <View>{/* Plus screen content */}</View>;
};

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Image
                width={25}
                height={25}
                source={require('../../assets/cat.jpg')}
                resizeMode="cover"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused
                    ? colors.palette.green
                    : colors.palette.offGreen,
                }}
              />
              <Text
                color={focused ? colors.palette.green : colors.palette.gray}
                style={styles.text}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Image
                width={25}
                height={25}
                source={require('../../assets/cat.jpg')}
                resizeMode="cover"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused
                    ? colors.palette.green
                    : colors.palette.offGreen,
                }}
              />
              <Text
                color={focused ? colors.palette.green : colors.palette.gray}
                style={styles.text}>
                Diagnose
              </Text>
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
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Image
                width={25}
                height={25}
                source={require('../../assets/cat.jpg')}
                resizeMode="cover"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused
                    ? colors.palette.green
                    : colors.palette.offGreen,
                }}
              />
              <Text
                color={focused ? colors.palette.green : colors.palette.gray}
                style={styles.text}>
                My Garden
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Image
                width={25}
                height={25}
                source={require('../../assets/cat.jpg')}
                resizeMode="cover"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused
                    ? colors.palette.green
                    : colors.palette.offGreen,
                }}
              />
              <Text
                color={focused ? colors.palette.green : colors.palette.gray}
                style={styles.text}>
                Profile
              </Text>
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
    top: 10,
  },
});

export default MyTabs;
