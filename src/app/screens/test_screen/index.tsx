import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../../components';

export const TestScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text preset='black'>Test Screen</Text>
      <Button
        text="FREE Premium Available"
        subText='Tap to upgrade your account!'
        onPress={() => console.log('Go to Home')}
        iconLeft={'mail'}
        preset={'third'}
        iconRight={'arrow'}
      />
      <Button text='continue' />
    </View>
  );
};

export default TestScreen;
