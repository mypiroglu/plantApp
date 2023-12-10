import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '../../components';
import styles from './styles';

export const ScanScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Scan</Text>
    </SafeAreaView>
  );
};