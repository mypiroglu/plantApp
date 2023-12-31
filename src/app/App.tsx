import React, { useLayoutEffect } from 'react';
import { StatusBar, StyleSheet, View, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppStack from './navigators/app-stack';
import { colors } from './utils';

const App: React.FC = () => {
  useLayoutEffect(() => {
    StatusBar.setBarStyle('dark-content');
    Platform.OS === 'android' &&
      StatusBar.setBackgroundColor(colors.background);
  }, []);
  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor={colors.transparent}
        animated={true}
        hidden={false}
      />
      <Provider store={store}>
        <AppStack />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
