import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '../../components';
import styles from './styles';

export const DiagnoseScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Diagnose</Text>
    </SafeAreaView>
  );
};