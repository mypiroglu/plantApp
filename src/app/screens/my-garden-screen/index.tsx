import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '../../components';
import styles from './styles';

export const MyGardenScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>My Garden</Text>
    </SafeAreaView>
  );
};