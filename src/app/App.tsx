import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {OnboardFlow} from 'react-native-onboard';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <OnboardFlow
        pages={[
          {
            title: 'Welcome to my app',
            subtitle: 'This is page 1',
            imageUri: 'https://frigade.com/img/example1.png',
          },
          {
            title: 'Page 2 header',
            subtitle: 'This is page 2',
            imageUri: 'https://frigade.com/img/example2.png',
          },
        ]}
        type={'fullscreen'}
      />
      <Text style={styles.sectionContainer}>Test</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 30,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
