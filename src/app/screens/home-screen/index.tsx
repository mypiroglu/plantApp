import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Text } from '../../components';
import { colors } from '../../utils';
import styles from './styles';

export const HomeScreen: React.FC = () => {
  useLayoutEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  return (
    <View style={styles.container}>
      <Text preset={'black'}>Hi, plat lover!</Text>
      <Text preset={'third'}>Good Afternoon! ⛅</Text>
    </View>
  );
};

